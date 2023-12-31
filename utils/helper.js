 export function filterData(searchText,FilteredRestaurents){
    const filterDatai = FilteredRestaurents.filter((restaurents)=>
      restaurents?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
    
    return filterDatai;
  }