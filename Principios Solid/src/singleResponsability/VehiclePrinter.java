package singleResponsability;

public class VehiclePrinter {
    //    Capa de presentacion
    public void  printVehicle(Vehicle vehicle){
        System.out.println("Numero de llantas: "+ vehicle.getWheelCount()+ " Max Speed: "+ vehicle.getMaxSpeed());
    }
}
