import React, { useState } from "react";
import ArrayElement from "./ArrayElement";
import './Path.css';

export default function Path() {
    function generateArray(size, rangeStart, rangeEnd) {
        let array = [];
        for ( let i = 0; i < size; ++i ) {
            array.push( Math.floor( Math.random() * (rangeEnd - rangeStart + 1) ) );
        }
        return array;
    }
    const [array, setArray] = useState( generateArray(8, 1, 100) );    

    function mergeSort(a, l, r) {
        if ( l >= r ) {
            return;
        }
        let m = Math.floor( (l+r)/2 );
        mergeSort(a, l, m);
        mergeSort(a, m+1, r);
        a = merge(a, l, m, r);
        console.log(a);
        setArray(oldArray => a);
    }

    function merge(a, l, m, r) {
        let arr = [];
        let i = l, j = m+1;
        while ( i <= m && j <= r ) {
            if ( a[i] < a[j] ) arr.push(a[i++]);
            else arr.push(a[j++]);
        }
        while ( i <= m ) arr.push(a[i++]);
        while ( j <= r ) arr.push(a[j++]);
        j = 0;
        for ( i = l; i <= r; ++i ) {
            a[i] = arr[j++];
        }
        return a;
    }

    const boxes = array.map( (number) => <ArrayElement value = {number} /> );

    return (
        <>
            <h1>{boxes}</h1>
            <button onClick={() => mergeSort(array, 0, 7)}>Sort</button>
        </>
    )
}