const motherboard = {   /* Alaplap */
    id = "";        //[]
    Name = "",      //[Alaplap neve]
    //Capacity = ,
    RamSlot = "",   //[DDR3 , DDR4]
    Brand = "",     //[Intel , AMD]
    Slots = 0       //
    CPUSlot =       //[AM4 , LGA1151 , LGA1200]
    StorageSlot = 0 //[1-8 / Itt a szám után nem kell vessző azt hiszem]
    Case = "",      //[ATX Full , ATX Mid , ATX Mini]
    nvme = true;    //[True = Van benne nvme slot | False = Nincs benne nvme slot]
};


const cpu = {   /* Processor */
    id = "";
    Name = "",      
    Capacity = 0,   //Ide írhatjuk a processzor órajelét
    //RamSlot = "", //[DDR3 , DDR4]
    Brand = "",     //[Intel , AMD]
    //Slots = 0     
    CPUSlot = ""    //[AM4 , LGA1151 , LGA1200]
    //StorageSlot = //[1-8 / Itt a szám után nem kell vessző azt hiszem]
    //Case = "",      //[ATX Full , ATX Mid , ATX Mini]
};


const ram = {   /* RAM */
    id = "";
    Name = "",
    Capacity = 0,   //[4Gb , 8Gb]
    RamSlot = "",   //[DDR3 , DDR4]
    //Brand = "",   //--Ezt később mert nem fontos--
    //Slots = 0       
    //CPUSlot = ""  //[AM4 , LGA1151 , LGA1200]
    //StorageSlot = //[1-8 / Itt a szám után nem kell vessző azt hiszem]
    //Case = "",      //[ATX Full , ATX Mid , ATX Mini]
};


const storage = {   /* Storage */
    id = "";
    Name = "",
    Capacity = 0,       //[500Gb , 1Tb , 2Tb]
    //RamSlot = "",
    //Brand = "",      //--opcionális--
    //Slots = 0
    //CPUSlot = ""
    StorageSlot =   //[1-8 / Itt a szám után nem kell vessző azt hiszem]
    Case = "",      //[ATX Full , ATX Mid , ATX Mini]
};


const hdd = {   /* StorageHDD */
    id = "";
    Name = "",
    Capacity = 0,        //[500Gb , 1Tb , 2Tb]
    //RamSlot = "",
    //Brand = "",       //--opcionális--
    //Slots = 0
    //CPUSlot = ""
    StorageSlot =   //[1-8 / Itt a szám után nem kell vessző azt hiszem]
    Case = "",      //[ATX Full , ATX Mid , ATX Mini]
};


const ssd = {   /* StorageSSD */
    id = "";
    Name = "",          
    Capacity = 0,        //[500Gb , 1Tb , 2Tb]
    //RamSlot = "",
    //Brand = "",       //--opcionális--
    //Slots = 0
    //CPUSlot = ""
    StorageSlot =   //[1-8 / Itt a szám után nem kell vessző azt hiszem]
    Case = "",      //[ATX Full , ATX Mid , ATX Mini]
};


const pwrsply = {   /* Power Supply */
    id = "";
    Name = "",
    Capacity = 0,        //[500W , 600W , 700W]
    //RamSlot = "",
    //Brand = "",
    //Slots = 0
    //CPUSlot = ""
    //StorageSlot =     //[1-8 / Itt a szám után nem kell vessző azt hiszem]
    Case = "",          //[ATX Full , ATX Mid , ATX Mini]
};