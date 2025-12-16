const student={
    name:"Abhishek",
    age:21,
    clg:"jnec",
    eng:89,
    phy:90,
    getavg(){
        let avg=(this.eng+this.phy)/2;
        console.log(avg);
    }
};