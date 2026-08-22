import type { Vehicle } from '../types/vehicle'

type StatsBarProps = {
    vehicles: Vehicle[]
}

function getStatusCounts(vehicles: Vehicle[]) {
  return {
    active: vehicles.filter((v) => v.status === 'active').length,
    inService: vehicles.filter((v) => v.status === 'in service').length,
    offline: vehicles.filter((v) => v.status === 'offline').length,
  }
}

function StatsBar({ vehicles }: StatsBarProps) {
  const { active, inService, offline } = getStatusCounts(vehicles)

  return (
    <div className="stats-bar">
      <span className="stats-bar__item stats-bar__item--active">Active: {active}</span>
      <span className="stats-bar__item stats-bar__item--in-service">In Service: {inService}</span>
      <span className="stats-bar__item stats-bar__item--offline">Offline: {offline}</span>
    </div>
  )
}

export default StatsBar
