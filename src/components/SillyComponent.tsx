import React from "react";
import '../styles/style.scss';

const objList = [
  {
    id: 1,
    name: 'Sunday',
    order: 1,
    size: 'small',
    color: 'cornflowerblue',
  },
  {
    id: 2,
    name: 'Monday',
    order: 2,
    size: 'small',
    color: 'green',
  },
  {
    id: 3,
    name: 'Tuesday',
    order: 3,
    size: 'small',
    color: 'aliceblue',
  },
  {
    id: 4,
    name: 'Wednesday',
    order: 4,
    size: 'small',
    color: 'coral',
  },
  {
    id: 5,
    name: 'Thursday',
    order: 6,
    size: 'xsmall',
    color: 'hotpink',
  },
  {
    id: 6,
    name: 'Friday',
    order: 6,
    size: 'xsmall',
    color: 'hotpink',
  },
  {
    id: 7,
    name: 'Saturday',
    order: 7,
    size: 'small',
    color: 'khaki'
  },
  {
    id: 8,
    name: 'Thursday',
    order: 8,
    size: 'xsmall',
    color: 'aqua',
  },
  {
    id: 9,
    name: 'Thursday',
    order: 8,
    size: 'xsmall',
    color: 'aqua',
  },
];

interface IState {
  objects: any;
}
class SillyComponent extends React.PureComponent<{},IState>{
  constructor(props: {}) {
    super(props);

    this.state={
      objects: [],
    };

    this.groupBy = this.groupBy.bind(this);
    this.handleXSmalls = this.handleXSmalls.bind(this);
  }

  componentDidMount(): void {
    /*
    * Check the objList.
    * Control the ones with size x-small and order of equal.
    * Make sure that x-small objects are order of 2.
    * Put the x-small objects in the wrapper.
    * */
    const objects: object[] = [];
    objList.forEach(obj =>{
      if(obj.size === 'xsmall'){
        // Grouping those with the same order.
        const grouped = this.groupBy(objList, (obj: { order: number; })=>obj.order).get(obj.order);
        // Check whether the grouped array exist in current objects array.
        const isGroupedExists = objects.some((r:any) => r.length === grouped.length && r.every((value:number, index:number) => grouped[index] === value));
        if(!isGroupedExists && grouped.length > 1){
          objects.push(grouped);
        }else if(grouped.length === 1){
          objects.push(obj);
        }
      }else
        objects.push(obj);
    });
    this.setState({objects});
  }

  groupBy(list: object[], keyGetter:any) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      if (!map.get(key))
        map.set(key, [item]);
      else
        map.get(key).push(item);
    });
    return map;
  }

  handleXSmalls(obj: object[], key: number){
    return(
      <div className="xsmall_obj_wrapper" key={key}>
        {
          obj.map((each:any) => {
            return(
              <div className="obj" style={{backgroundColor: `${each.color}`}} key={each.id}>
                {each.name}
              </div>
            )
          })
        }
      </div>
    )
  }

  render(){
    const {objects} = this.state;
    return (
      <div className="obj_wrapper">
        {
          objects.map((obj:any, key:number) => {
            if(Array.isArray(obj) && obj.length > 1){
                return this.handleXSmalls(obj, key);
            }else{
              return (
                <div className="obj" style={{backgroundColor: `${obj.color}`}} key={key}>
                  {obj.name}
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default SillyComponent;
