import { ThemeContext } from "../../App";
import React from "react";

const LongText = () => {
  const theme = React.useContext(ThemeContext);
    return (<>
      <p style={{ background: theme.background, color: theme.fontColor }}>{loremIpsumText[0]}</p>
    </>);
  }
  
  export default LongText;
  
  // Ejemplo para demostrar qué pasa con componentes pesados
  const loremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper mattis elit, at eleifend neque faucibus sed. Vestibulum consequat ligula sed dapibus vulputate. Sed facilisis molestie velit eget sollicitudin. Aenean maximus vel nisi ut imperdiet. In condimentum metus nec vehicula feugiat. Praesent sollicitudin, lectus vitae pulvinar condimentum, tellus ipsum pharetra arcu, eget eleifend nisi tortor id lacus. Vivamus porta mi non dignissim vulputate. Duis condimentum, dui eget consequat ultricies, est massa tincidunt dolor, ut laoreet odio ex quis ex.", "Pellentesque neque diam, malesuada et vestibulum nec, mollis ac lacus. Proin pretium sapien nec ipsum commodo dictum. Integer odio erat, bibendum at velit non, sodales pharetra nulla. Duis nibh massa, aliquet in convallis venenatis, efficitur nec libero. Cras ut varius libero, at pulvinar arcu. Morbi mollis urna auctor ligula faucibus, et placerat libero commodo. Praesent feugiat sagittis justo a elementum. Sed aliquet urna dui, vel molestie arcu semper ac. Praesent sit amet elementum dui, at suscipit ante.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper mattis elit, at eleifend neque faucibus sed. Vestibulum consequat ligula sed dapibus vulputate. Sed facilisis molestie velit eget sollicitudin. Aenean maximus vel nisi ut imperdiet. In condimentum metus nec vehicula feugiat. Praesent sollicitudin, lectus vitae pulvinar condimentum, tellus ipsum pharetra arcu, eget eleifend nisi tortor id lacus. Vivamus porta mi non dignissim vulputate. Duis condimentum, dui eget consequat ultricies, est massa tincidunt dolor, ut laoreet odio ex quis ex.", "Pellentesque neque diam, malesuada et vestibulum nec, mollis ac lacus. Proin pretium sapien nec ipsum commodo dictum. Integer odio erat, bibendum at velit non, sodales pharetra nulla. Duis nibh massa, aliquet in convallis venenatis, efficitur nec libero. Cras ut varius libero, at pulvinar arcu. Morbi mollis urna auctor ligula faucibus, et placerat libero commodo. Praesent feugiat sagittis justo a elementum. Sed aliquet urna dui, vel molestie arcu semper ac. Praesent sit amet elementum dui, at suscipit ante.",
  ];