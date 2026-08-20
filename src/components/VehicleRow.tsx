import type { Vehicle } from '../types/vehicle'
type VehicleRowProps = {
  vehicle: Vehicle
  onClick: (vin: string) => void
}
function VehicleRow({ vehicle, onClick }: VehicleRowProps) {
  return (
    <div onClick={() => onClick(vehicle.vin)}>
      <h3>{vehicle.vin}</h3>
      <p>{vehicle.model}</p>
      <p>Status: {vehicle.status}</p>
      <p>Battery: {vehicle.batteryPercent}%</p>
      <p>Location: {vehicle.location}</p>
    </div>
  )
}

export default VehicleRow
