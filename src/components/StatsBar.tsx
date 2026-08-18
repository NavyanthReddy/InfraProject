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
    <div>
      <span>Active: {active}</span>
      <span>In Service: {inService}</span>
      <span>Offline: {offline}</span>
    </div>
  )
}

export default StatsBar
