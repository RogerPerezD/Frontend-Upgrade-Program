package singleResponsability;

public class Vehicle {
//Capa de Logica del negocio
    private int wheelCount;
    private double maxSpeed;

    public Vehicle(int wheelCount, double maxSpeed) {
        this.wheelCount = wheelCount;
        this.maxSpeed = maxSpeed;
    }

    public int getWheelCount() {
        return wheelCount;
    }

    public void setWheelCount(int wheelCount) {
        this.wheelCount = wheelCount;
    }

    public double getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(double maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

}
