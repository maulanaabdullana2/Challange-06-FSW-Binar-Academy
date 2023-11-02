import React, { createContext, useContext, useReducer, useEffect } from "react";
const CarContext = createContext();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function populateCars(cars) {
  const updatedCars = cars.map((car) => {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const availableAt = new Date(
      timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
    );

    return {
      ...car,
      availableAt,
    };
  });

  return updatedCars;
}

async function listCars(filterer) {
  let cars;
  let cachedCarsString = localStorage.getItem("CARS");

  if (!!cachedCarsString) {
    const cacheCars = JSON.parse(cachedCarsString);
    cars = await populateCars(cacheCars);
  } else {
    const response = await fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );
    const body = await response.json();
    cars = await populateCars(body);

    localStorage.setItem("CARS", JSON.stringify(cars));
  }

  if (filterer instanceof Function) return cars.filter(filterer);

  return cars;
}

const initialState = {
  cars: [],
  filteredCars: [],
  filter: {
    tipeDriver: "default",
    tanggal: "",
    waktuJemput: "false",
    jumlahPenumpang: "",
  },
};

const carReducer = (state, action) => {
  switch (action.type) {
    case "SET_CARS":
      return { ...state, cars: action.payload };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    case "FILTER_CARS":
      const filtered = state.cars.filter((car) => {
        const tanggalJemputData = new Date(car.availableAt).getTime();
        const tanggal = new Date(
          `${state.filter.tanggal} ${state.filter.waktuJemput}`
        ).getTime();
        const checkWaktu = tanggalJemputData >= tanggal;
        const availableAt =
          state.filter.tipeDriver === "true" && car.available ? true : false;
        const notAvailableAt =
          state.filter.tipeDriver === "false" && !car.available ? true : false;
        const penumpang = car.capacity >= state.filter.jumlahPenumpang;

        if (
          state.filter.tipeDriver !== "default" &&
          state.filter.tanggal !== "" &&
          state.filter.waktuJemput !== "false" &&
          state.filter.jumlahPenumpang >= 0
        ) {
          return (availableAt || notAvailableAt) && checkWaktu && penumpang;
        } else if (
          state.filter.tipeDriver !== "default" &&
          state.filter.jumlahPenumpang > 0
        ) {
          return (availableAt || notAvailableAt) && penumpang;
        } else if (
          state.filter.tanggal !== "" &&
          state.filter.waktuJemput !== "false" &&
          state.filter.jumlahPenumpang > 0
        ) {
          return checkWaktu && penumpang;
        } else if (
          state.filter.tanggal !== "" &&
          state.filter.waktuJemput !== "false"
        ) {
          return checkWaktu;
        } else if (state.filter.tipeDriver !== "default") {
          return availableAt || notAvailableAt;
        } else {
          return penumpang;
        }
      });
      return { ...state, filteredCars: filtered };
    default:
      return state;
  }
};

export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await listCars();
        dispatch({ type: "SET_CARS", payload: cars });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCar = () => {
  const context = useContext(CarContext);
  return context;
};
