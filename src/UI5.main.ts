
import App from './App.svelte'

function onThemeChanged (sTheme) {  
  console.log('onThemeChanged');
  //Call central theme change function on App.js 
}
function onLocalizationChanged (sLocal) {  
  console.log('onLocalizationChanged');
  //Call central local change function on App.js 
}

export function loadSvelte(params) {
  console.log('loadSvelte');
  const app = new App({
    target: document.getElementById(params.DivName),
  })

  return () => {
    //root.unmount();
  }
}

window['sveltetodo'] = loadSvelte;
window['sveltetodo_onThemeChanged'] = onThemeChanged ;
window['sveltetodo_onLocalizationChanged'] = onLocalizationChanged ;
