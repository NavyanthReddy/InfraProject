import type { Vehicle } from '../types/vehicle'

export const mockVehicles: Vehicle[] = [
  { vin: '1FTFW1E5XNFA12345', model: 'F-150 Lightning', status: 'active', batteryPercent: 82, location: 'Depot A - Bay 3' },
  { vin: '5YJ3E1EA9KF317001', model: 'Model 3', status: 'active', batteryPercent: 64, location: 'Downtown Loop' },
  { vin: '7SAYGDEE9PF123456', model: 'Model Y', status: 'in service', batteryPercent: 41, location: 'Service Center 2' },
  { vin: 'WBY8P2C0XL7D12345', model: 'i4', status: 'offline', batteryPercent: 12, location: 'Depot B - Bay 1' },
  { vin: '1N4AZ1CP0KC123456', model: 'Leaf', status: 'active', batteryPercent: 95, location: 'Warehouse District' },
  { vin: 'KM8K33AGXPU123456', model: 'Ioniq 5', status: 'in service', batteryPercent: 58, location: 'North Loop' },
]
