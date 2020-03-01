import "./styles.css";
import { add, initBody } from "./helpers";
import { interval } from "rxjs";
import { map, take } from "rxjs/operators";

interface IPoint {
  x: number;
  y: number;
}
initBody("rx-js");

interval(1000)
  .pipe(
    take(5),
    map((val: number): IPoint => ({ x: val, y: val }))
  )
  .subscribe(val => add.li(val.x));
