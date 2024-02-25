class Ride {
    constructor(origin, destination, passengerCount) {
      this.origin = origin;
      this.destination = destination;
      this.passengerCount = passengerCount;
      this.status = "Pending";
    }
  
    book() {
      this.status = "Booked";
    }
  
    cancel() {
      this.status = "Cancelled";
    }
  }
  
  const ride1 = new Ride("Sangeetha", "Dharmapuri","g.h", 2);
  const ride2 = new Ride("Gokul", "Tirupur", "D.C.", 4);
  
  ride1.book();
  ride2.cancel();
  console.log(ride1);
  console.log(ride1.status); // "Booked"
  console.log("\n ride2",ride2);
  console.log(ride2.status); // "Cancelled"
  