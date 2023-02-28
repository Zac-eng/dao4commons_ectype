import { Header } from '@mantine/core';
import { Aperture } from "react-feather";

export function MtHeader() {
  return (
    <Header height={70} style={{"backgroundColor":"grey", "color":"white", "fontFamily":"Gill sans"}}>
        <div style={{"display":"flex","flexDirection":"row", "justifyContent":"center", "verticalAlign":"center"}}>
            <Aperture size={50}/>
            <text style={{"fontSize":35}}>dao4.commons.shiden</text>
        </div>
    </Header>
  );
}