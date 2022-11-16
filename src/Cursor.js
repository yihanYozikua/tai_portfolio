import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'


import cursorCss from './css/cursor.module.scss'

export default function Cursor(cursorTypes){
  let cursorContent = '';
  useEffect(() => {
    console.log(`cursorTypes: ${cursorTypes.cursorTypes}`);
    var cursor = document.getElementById(`${cursorCss.cursor}`);
    var cursorinner = document.getElementById(`${cursorCss.cursor2}`);
    var a = document.querySelectorAll('a');
    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    function cursorLeftRight(els, cursorClass, cursorInnerClass){
      [].forEach.call(els, function(el){
        el.addEventListener('mouseover', () => {
          cursor.classList.add(cursorClass);
          cursorinner.classList.add(cursorInnerClass);
          // 👆
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove(cursorClass);
          cursorinner.classList.remove(cursorInnerClass);
        });
      });
    }
    cursorLeftRight(a, `${cursorCss.cursor_hover_a}`, `${cursorCss.cursorinnerhover_a}`);
    cursor.classList.add(`${cursorCss.cursor}`);
    cursorinner.classList.add(`${cursorCss.cursor2}`);

    

  }, [cursorTypes.cursorTypes])


  return(
    <>
      <div id={cursorCss.cursor}>{cursorTypes.cursorTypes}</div>
      <div id={cursorCss.cursor2}></div>
    </>
  );
}