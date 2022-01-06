package openClose;

public class Vehicle {
    private String type;

    public Vehicle(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void draw(){
        if ( this.type.equals("CAR")){
            drawMotorBike( Vehicle vehicle);
        }else if (this.type.equals("MOTORBIKE")){
            System.out.println("Es una moto");
        }
    }

    public void drawMotorBike( Vehicle vehicle){

    }

    public void drawCar( Vehicle vehicle){

    }
}
