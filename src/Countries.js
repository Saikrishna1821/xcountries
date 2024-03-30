import * as React from 'react';
import Grid from '@mui/material/Grid';
export function Countries ()
{

    const [country,setCountry]=React.useState([]);

const getCountries=async()=>
{
    try{
    const data= await fetch('https://restcountries.com/v3.1/all');
    let k=await data.json();
    setCountry(k);
    }
    catch(e)
    {
        console.log(e);
    }
}

React.useEffect(()=>
{
    getCountries();
},[]);

    return (
        <>

<Grid container spacing={2}>
 
   {country.map((item)=>(
   <Grid item md={1} columnGap={2} rowGap={2} marginTop={1} marginLeft={1} border={1}>
    <img src={item.flags.png} alt="no image" width={100} height={100} />
    {item.name.common}
    </Grid>
  
   ))}
 
</Grid>
        </>
    )
}