/* Floatbox v3.52.2 */
Floatbox.prototype.tagPopup=function(B){var D=this,A=(B.popupType!=="down"),C=B.thumb.style;B.thumb.id=B.thumb.id||"fbPop"+(Math.random()+"").substring(2);C.borderWidth=D.zoomPopBorder+"px";B.anchor.onmouseover=function(){C.display="none";var F=D.getLeftTop(this,true),G=F.left,L=F.top;F=D.getLeftTop(this);C.display="";var I=(this.offsetWidth-B.thumb.offsetWidth)/2,K=A?2-B.thumb.offsetHeight:this.offsetHeight,E=D.getScroll(),H=E.left+D.getDisplayWidth();var J=F.left+I+B.thumb.offsetWidth-H;if(J>0){I-=J}var J=F.left+I-E.left;if(J<0){I-=J}if(A){if(F.top+K<E.top){K=this.offsetHeight}}else{if(F.top+K+B.thumb.offsetHeight>E.top+D.getDisplayHeight()){K=2-B.thumb.offsetHeight}}C.left=(G+I)+"px";C.top=(L+K)+"px"};B.anchor.onmouseout=function(){if(!B.popupLocked){C.left="0";C.top="-9999px"}};if(!B.anchor.onclick){B.anchor.onclick=B.anchor.onmouseout}};while(fb.popups.length){fb.tagPopup(fb.popups.pop())};