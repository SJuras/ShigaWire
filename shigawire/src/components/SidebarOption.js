import React from "react";
import styled from "styled-components";


function SidebarOption({ Icon, title }){
  return(
    <SidebarOptionContainer>
      {Icon && <Icon fontSize='small' style={{padding: '10px'}} />}
      { Icon ? (
        <h3>{title}</h3>
      ): (
        <h2>Channel</h2>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;



const SidebarOptionContainer = styled.div`

`
