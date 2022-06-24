import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Campañas"  />
      <Grid container spacing={3}>
        <Grid item xs={10} md={10}>
          <Widget title="Añadir Campañas">

          

          <div><p>Campaña ID</p>
         
          <fieldset aria-hidden="true" class="css-igs3ac"> 

              <input aria-invalid="false" id="component-helper9" type="text" class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq" ></input>
              </fieldset>
              </div>     


              <div><p>Nombre de la Campaña</p>
         
         <fieldset aria-hidden="true" class="css-igs3ac"> 

             <input aria-invalid="false" id="component-helper9" type="text" class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq" ></input>
             </fieldset>
             </div>    

          <div><p>Descripcion de la Campaña</p>
         
         <fieldset aria-hidden="true" class="css-igs3ac"> 

             <input aria-invalid="false" id="component-helper9" type="text" class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq" ></input>
             </fieldset>
             </div>    

          <div><p>Usuario del administrador</p>
         
         <fieldset aria-hidden="true" class="css-igs3ac"> 

             <input aria-invalid="false" id="component-helper9" type="text" class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq" ></input>
             </fieldset>
             </div>    


             <div><p>Activa</p>
         
         <fieldset aria-hidden="true" class="css-igs3ac"> 

             <input aria-invalid="false" id="component-helper9" type="text" class="MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq" ></input>
             </fieldset>
             </div>    
          


    
         
          </Widget>
        </Grid>
       
       
      </Grid>
    </>
  );
}
