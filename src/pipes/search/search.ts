import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure:true
})

export class SearchPipe implements PipeTransform {

  transform(items: any[], filterQuery: any): any[] {
    if (!filterQuery) return items;
    if(!items){
      return [];
    }
    return items.filter(function(item){
      var totalString = JSON.stringify(item);
      return (totalString.toLowerCase().indexOf(filterQuery.toLowerCase()) > -1);
    })
  }

}
