const midelware= (req,res,next)=> {
    let day = new Date();
    let numberOfDate = day.getDay();
    let time = day.getHours()
    if(!((time>=9 && time<17) && (numberOfDate<=6 && numberOfDate>=1 ))){
        console.log('hey')
       return  res.status(404).json({msg:"App not accissible"})
     
        
    }
    next()
    
   
    
};
module.exports =midelware