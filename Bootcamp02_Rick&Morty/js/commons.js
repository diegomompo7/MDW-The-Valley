const mapEpisode = (options, option) => {
    let optionFormated = [];
  
    options.forEach((element, i) => {
      const StringParts = element.split("/");
      let idEpisode = StringParts[StringParts.length -1];
      let auxObject = {
        url: element,
        number: idEpisode,
      }
      optionFormated.push(auxObject)
    });
  
    return optionFormated;
  }
  const formatEpisode = (option, options) => {
    let htmlStructure = "";
  
    options.forEach(element => {
        htmlStructure += `<button class="detail__options detail__options-${option}">${element.number}</button>`
  
        });
  
      htmlStructure = `
      <p class="detail__info-title">${option.toUpperCase()}</p>
      <div class="detail__episode">
          ${htmlStructure}
      </div>  
      `  
    return htmlStructure;
  }
  const addEventListenerToOptions = (callBack, options, option) => {
    console.log(options)
    let optionLinks = [...document.getElementsByClassName(`detail__options-${option}`)];
    optionLinks.forEach((element, i) => {
       element.addEventListener('click', () => {
         printPage(callBack.toUpperCase(), options[i].url);
       })
    });
 }