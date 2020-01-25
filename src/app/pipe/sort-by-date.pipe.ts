import {Pipe, PipeTransform} from '@angular/core';

interface Job {
  date: string[];
  title: string;
  description?: string;
}


@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: object[] | string): any {
    if (typeof value === 'string') {
      return value;
    }

    return value.map((job: []) => job.sort(((jobPositionA: Job, jobPositionB: Job) => {
      let dateA = new Date(jobPositionA.date[0]).getTime();
      let dateB = new Date(jobPositionB.date[0]).getTime();

      dateA = isNaN(dateA) ? new Date().getTime() : dateA;
      dateB = isNaN(dateB) ? new Date().getTime() : dateB;

      return dateB - dateA;
    })))

      .sort((jobA: Job[], jobB: Job[]) => {
        let dateJob1 = new Date(jobA[0].date[0]).getTime();
        let dateJob2 = new Date(jobB[0].date[0]).getTime();

        dateJob1 = isNaN(dateJob1) ? new Date().getTime() : dateJob1;
        dateJob2 = isNaN(dateJob2) ? new Date().getTime() : dateJob2;

        return dateJob2 - dateJob1;
      });
  }

}
