import type { Vehicle } from '../types/vehicle'
type VehicleRowProps = {
  vehicle: Vehicle
  onClick: (vin: string) => void
}
function VehicleRow({ vehicle, onClick }: VehicleRowProps) {
  const statusClass = vehicle.status.replace(' ', '-')

  return (
    <div className="vehicle-row" onClick={() => onClick(vehicle.vin)}>
      <h3 className="vehicle-row__vin">{vehicle.vin}</h3>
      <p className="vehicle-row__model">{vehicle.model}</p>
      <p className={`vehicle-row__status vehicle-row__status--${statusClass}`}>
        <span className="vehicle-row__status-dot" />
        {vehicle.status}
      </p>
      <p className="vehicle-row__battery">Battery: {vehicle.batteryPercent}%</p>
      <p className="vehicle-row__location">Location: {vehicle.location}</p>
    </div>
  )
}

export default VehicleRow
