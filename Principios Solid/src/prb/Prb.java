package prb;

import openClose.Vehicle;
//import singleResponsability.VehiclePrinter;

public class Prb {
    public static void main(String[] args) {

//        Single Responsability
//        Vehicle vehicle = new Vehicle(4, 345);
//        VehiclePrinter printer = new VehiclePrinter();
//
//        printer.printVehicle(vehicle);
//        vehicle.printVehicle();

        Vehicle car = new Vehicle("CAR");
        Vehicle moto = new Vehicle("MOTORBIKE");
        car.draw();
        moto.draw();
    }
}
