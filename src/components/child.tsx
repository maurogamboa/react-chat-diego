import { useEffect } from "react";
import { Vehicle } from "../types/Vehicle";

export function Child({ vehicle }: { vehicle: Vehicle }) {
  const update = (props: Vehicle) => {
    console.log("update", props);
  };

  useEffect(() => {
    update(vehicle);
  }, [vehicle]);

  return <p>{vehicle.name}</p>;
}
