gdjs.BedroomCode = {};
gdjs.BedroomCode.GDbackgroundObjects1= [];
gdjs.BedroomCode.GDbackgroundObjects2= [];
gdjs.BedroomCode.GDbackgroundObjects3= [];
gdjs.BedroomCode.GDbackgroundObjects4= [];
gdjs.BedroomCode.GDupfloorObjects1= [];
gdjs.BedroomCode.GDupfloorObjects2= [];
gdjs.BedroomCode.GDupfloorObjects3= [];
gdjs.BedroomCode.GDupfloorObjects4= [];
gdjs.BedroomCode.GDdownfloorObjects1= [];
gdjs.BedroomCode.GDdownfloorObjects2= [];
gdjs.BedroomCode.GDdownfloorObjects3= [];
gdjs.BedroomCode.GDdownfloorObjects4= [];
gdjs.BedroomCode.GDleftwallObjects1= [];
gdjs.BedroomCode.GDleftwallObjects2= [];
gdjs.BedroomCode.GDleftwallObjects3= [];
gdjs.BedroomCode.GDleftwallObjects4= [];
gdjs.BedroomCode.GDrightwallObjects1= [];
gdjs.BedroomCode.GDrightwallObjects2= [];
gdjs.BedroomCode.GDrightwallObjects3= [];
gdjs.BedroomCode.GDrightwallObjects4= [];
gdjs.BedroomCode.GDHollyObjects1= [];
gdjs.BedroomCode.GDHollyObjects2= [];
gdjs.BedroomCode.GDHollyObjects3= [];
gdjs.BedroomCode.GDHollyObjects4= [];
gdjs.BedroomCode.GDbackObjects1= [];
gdjs.BedroomCode.GDbackObjects2= [];
gdjs.BedroomCode.GDbackObjects3= [];
gdjs.BedroomCode.GDbackObjects4= [];
gdjs.BedroomCode.GDfetalObjects1= [];
gdjs.BedroomCode.GDfetalObjects2= [];
gdjs.BedroomCode.GDfetalObjects3= [];
gdjs.BedroomCode.GDfetalObjects4= [];
gdjs.BedroomCode.GDlieObjects1= [];
gdjs.BedroomCode.GDlieObjects2= [];
gdjs.BedroomCode.GDlieObjects3= [];
gdjs.BedroomCode.GDlieObjects4= [];
gdjs.BedroomCode.GDpillowObjects1= [];
gdjs.BedroomCode.GDpillowObjects2= [];
gdjs.BedroomCode.GDpillowObjects3= [];
gdjs.BedroomCode.GDpillowObjects4= [];
gdjs.BedroomCode.GDstomachObjects1= [];
gdjs.BedroomCode.GDstomachObjects2= [];
gdjs.BedroomCode.GDstomachObjects3= [];
gdjs.BedroomCode.GDstomachObjects4= [];
gdjs.BedroomCode.GDplatformObjects1= [];
gdjs.BedroomCode.GDplatformObjects2= [];
gdjs.BedroomCode.GDplatformObjects3= [];
gdjs.BedroomCode.GDplatformObjects4= [];
gdjs.BedroomCode.GDNewTextObjects1= [];
gdjs.BedroomCode.GDNewTextObjects2= [];
gdjs.BedroomCode.GDNewTextObjects3= [];
gdjs.BedroomCode.GDNewTextObjects4= [];
gdjs.BedroomCode.GDRetryObjects1= [];
gdjs.BedroomCode.GDRetryObjects2= [];
gdjs.BedroomCode.GDRetryObjects3= [];
gdjs.BedroomCode.GDRetryObjects4= [];

gdjs.BedroomCode.conditionTrue_0 = {val:false};
gdjs.BedroomCode.condition0IsTrue_0 = {val:false};
gdjs.BedroomCode.condition1IsTrue_0 = {val:false};
gdjs.BedroomCode.condition2IsTrue_0 = {val:false};
gdjs.BedroomCode.condition3IsTrue_0 = {val:false};
gdjs.BedroomCode.conditionTrue_1 = {val:false};
gdjs.BedroomCode.condition0IsTrue_1 = {val:false};
gdjs.BedroomCode.condition1IsTrue_1 = {val:false};
gdjs.BedroomCode.condition2IsTrue_1 = {val:false};
gdjs.BedroomCode.condition3IsTrue_1 = {val:false};


gdjs.BedroomCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects2, gdjs.BedroomCode.GDHollyObjects3);


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects3[k] = gdjs.BedroomCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects3.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects3[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects2, gdjs.BedroomCode.GDHollyObjects3);


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects3[k] = gdjs.BedroomCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects3.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects2, gdjs.BedroomCode.GDHollyObjects3);


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects3[k] = gdjs.BedroomCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects3.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects3[i].setAnimationName("Falling");
}
}}

}


{


{
}

}


};gdjs.BedroomCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.BedroomCode.GDHollyObjects2 */

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects2[k] = gdjs.BedroomCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects2[i].setAnimationName("Idle");
}
}}

}


};gdjs.BedroomCode.eventsList2 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
gdjs.BedroomCode.condition1IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.BedroomCode.condition0IsTrue_0.val ) {
{
{gdjs.BedroomCode.conditionTrue_1 = gdjs.BedroomCode.condition1IsTrue_0;
gdjs.BedroomCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9462068);
}
}}
if (gdjs.BedroomCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\cartoon-jump-6462.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects2[k] = gdjs.BedroomCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BedroomCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects2.length;i<l;++i) {
    if ( !(gdjs.BedroomCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects2[k] = gdjs.BedroomCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BedroomCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects2[k] = gdjs.BedroomCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.BedroomCode.GDHollyObjects1 */

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects1[k] = gdjs.BedroomCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects1.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects1[i].flipX(false);
}
}}

}


};gdjs.BedroomCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.BedroomCode.GDHollyObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects1[i].getVariableNumber(gdjs.BedroomCode.GDHollyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects1[k] = gdjs.BedroomCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects1.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BedroomCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.BedroomCode.eventsList4 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.BedroomCode.eventsList5 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.BedroomCode.eventsList6 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.BedroomCode.eventsList7 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.BedroomCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects2[i].getVariableNumber(gdjs.BedroomCode.GDHollyObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects2[k] = gdjs.BedroomCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects2[i].setAnimationName("Ground smash");
}
}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.BedroomCode.eventsList9 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
gdjs.BedroomCode.condition1IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.BedroomCode.condition0IsTrue_0.val ) {
{
{gdjs.BedroomCode.conditionTrue_1 = gdjs.BedroomCode.condition1IsTrue_0;
gdjs.BedroomCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9467980);
}
}}
if (gdjs.BedroomCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.BedroomCode.GDHollyObjects1);
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects1[i].returnVariable(gdjs.BedroomCode.GDHollyObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\whip01-6952.mp3", false, 20, 0.8);
}
{ //Subevents
gdjs.BedroomCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.BedroomCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.BedroomCode.GDHollyObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects1[i].hasAnimationEnded() ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects1[k] = gdjs.BedroomCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects1.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects1[i].returnVariable(gdjs.BedroomCode.GDHollyObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.BedroomCode.eventsList11 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.BedroomCode.GDHollyObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.BedroomCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.BedroomCode.GDHollyObjects1[0].getPointX("")) + 60, 0.05), "", 0);
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDRetryObjects2Objects = Hashtable.newFrom({"Retry": gdjs.BedroomCode.GDRetryObjects2});
gdjs.BedroomCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.BedroomCode.GDRetryObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
gdjs.BedroomCode.condition1IsTrue_0.val = false;
gdjs.BedroomCode.condition2IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BedroomCode.condition0IsTrue_0.val ) {
{
gdjs.BedroomCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDRetryObjects2Objects, runtimeScene, true, false);
}if ( gdjs.BedroomCode.condition1IsTrue_0.val ) {
{
{gdjs.BedroomCode.conditionTrue_1 = gdjs.BedroomCode.condition2IsTrue_0;
gdjs.BedroomCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9480996);
}
}}
}
if (gdjs.BedroomCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
gdjs.BedroomCode.condition1IsTrue_0.val = false;
gdjs.BedroomCode.condition2IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BedroomCode.condition0IsTrue_0.val ) {
{
/* Unknown object - skipped. */}if ( gdjs.BedroomCode.condition1IsTrue_0.val ) {
{
{gdjs.BedroomCode.conditionTrue_1 = gdjs.BedroomCode.condition2IsTrue_0;
gdjs.BedroomCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9481964);
}
}}
}
if (gdjs.BedroomCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bedroom", false);
}}

}


};gdjs.BedroomCode.eventsList13 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.BedroomCode.eventsList14 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.BedroomCode.eventsList15 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.BedroomCode.eventsList16 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.BedroomCode.eventsList17 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.BedroomCode.eventsList18 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.BedroomCode.eventsList19 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.BedroomCode.GDbackObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects = Hashtable.newFrom({"leftwall": gdjs.BedroomCode.GDleftwallObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.BedroomCode.GDbackObjects1});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects = Hashtable.newFrom({"rightwall": gdjs.BedroomCode.GDrightwallObjects1});
gdjs.BedroomCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BedroomCode.GDbackObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDbackObjects2[i].getVariableString(gdjs.BedroomCode.GDbackObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDbackObjects2[k] = gdjs.BedroomCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDbackObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDbackObjects2[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BedroomCode.GDbackObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDbackObjects2[i].getVariableString(gdjs.BedroomCode.GDbackObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDbackObjects2[k] = gdjs.BedroomCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDbackObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDbackObjects2[i].addForce(-(500), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BedroomCode.GDbackObjects2);
gdjs.copyArray(runtimeScene.getObjects("leftwall"), gdjs.BedroomCode.GDleftwallObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDbackObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDbackObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDbackObjects2[i].returnVariable(gdjs.BedroomCode.GDbackObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BedroomCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwall"), gdjs.BedroomCode.GDrightwallObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDbackObjects1Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDbackObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDbackObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDbackObjects1[i].returnVariable(gdjs.BedroomCode.GDbackObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDfetalObjects2Objects = Hashtable.newFrom({"fetal": gdjs.BedroomCode.GDfetalObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects = Hashtable.newFrom({"leftwall": gdjs.BedroomCode.GDleftwallObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDfetalObjects1Objects = Hashtable.newFrom({"fetal": gdjs.BedroomCode.GDfetalObjects1});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects = Hashtable.newFrom({"rightwall": gdjs.BedroomCode.GDrightwallObjects1});
gdjs.BedroomCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("fetal"), gdjs.BedroomCode.GDfetalObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDfetalObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDfetalObjects2[i].getVariableString(gdjs.BedroomCode.GDfetalObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDfetalObjects2[k] = gdjs.BedroomCode.GDfetalObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDfetalObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDfetalObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDfetalObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDfetalObjects2[i].addForce(700, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fetal"), gdjs.BedroomCode.GDfetalObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDfetalObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDfetalObjects2[i].getVariableString(gdjs.BedroomCode.GDfetalObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDfetalObjects2[k] = gdjs.BedroomCode.GDfetalObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDfetalObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDfetalObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDfetalObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDfetalObjects2[i].addForce(-(200), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fetal"), gdjs.BedroomCode.GDfetalObjects2);
gdjs.copyArray(runtimeScene.getObjects("leftwall"), gdjs.BedroomCode.GDleftwallObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDfetalObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDfetalObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDfetalObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDfetalObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDfetalObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDfetalObjects2[i].returnVariable(gdjs.BedroomCode.GDfetalObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fetal"), gdjs.BedroomCode.GDfetalObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwall"), gdjs.BedroomCode.GDrightwallObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDfetalObjects1Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDfetalObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDfetalObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDfetalObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDfetalObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDfetalObjects1[i].returnVariable(gdjs.BedroomCode.GDfetalObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDlieObjects2Objects = Hashtable.newFrom({"lie": gdjs.BedroomCode.GDlieObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects = Hashtable.newFrom({"leftwall": gdjs.BedroomCode.GDleftwallObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDlieObjects1Objects = Hashtable.newFrom({"lie": gdjs.BedroomCode.GDlieObjects1});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects = Hashtable.newFrom({"rightwall": gdjs.BedroomCode.GDrightwallObjects1});
gdjs.BedroomCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("lie"), gdjs.BedroomCode.GDlieObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDlieObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDlieObjects2[i].getVariableString(gdjs.BedroomCode.GDlieObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDlieObjects2[k] = gdjs.BedroomCode.GDlieObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDlieObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDlieObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDlieObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDlieObjects2[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lie"), gdjs.BedroomCode.GDlieObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDlieObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDlieObjects2[i].getVariableString(gdjs.BedroomCode.GDlieObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDlieObjects2[k] = gdjs.BedroomCode.GDlieObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDlieObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDlieObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDlieObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDlieObjects2[i].addForce(-(800), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leftwall"), gdjs.BedroomCode.GDleftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("lie"), gdjs.BedroomCode.GDlieObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDlieObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDlieObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDlieObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDlieObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDlieObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDlieObjects2[i].returnVariable(gdjs.BedroomCode.GDlieObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lie"), gdjs.BedroomCode.GDlieObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwall"), gdjs.BedroomCode.GDrightwallObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDlieObjects1Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDlieObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDlieObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDlieObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDlieObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDlieObjects1[i].returnVariable(gdjs.BedroomCode.GDlieObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDpillowObjects2Objects = Hashtable.newFrom({"pillow": gdjs.BedroomCode.GDpillowObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects = Hashtable.newFrom({"leftwall": gdjs.BedroomCode.GDleftwallObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDpillowObjects1Objects = Hashtable.newFrom({"pillow": gdjs.BedroomCode.GDpillowObjects1});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects = Hashtable.newFrom({"rightwall": gdjs.BedroomCode.GDrightwallObjects1});
gdjs.BedroomCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pillow"), gdjs.BedroomCode.GDpillowObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDpillowObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDpillowObjects2[i].getVariableString(gdjs.BedroomCode.GDpillowObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDpillowObjects2[k] = gdjs.BedroomCode.GDpillowObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDpillowObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDpillowObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDpillowObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDpillowObjects2[i].addForce(600, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pillow"), gdjs.BedroomCode.GDpillowObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDpillowObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDpillowObjects2[i].getVariableString(gdjs.BedroomCode.GDpillowObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDpillowObjects2[k] = gdjs.BedroomCode.GDpillowObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDpillowObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDpillowObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDpillowObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDpillowObjects2[i].addForce(-(600), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leftwall"), gdjs.BedroomCode.GDleftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("pillow"), gdjs.BedroomCode.GDpillowObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDpillowObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDpillowObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDpillowObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDpillowObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDpillowObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDpillowObjects2[i].returnVariable(gdjs.BedroomCode.GDpillowObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pillow"), gdjs.BedroomCode.GDpillowObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwall"), gdjs.BedroomCode.GDrightwallObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDpillowObjects1Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDpillowObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDpillowObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDpillowObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDpillowObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDpillowObjects1[i].returnVariable(gdjs.BedroomCode.GDpillowObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDstomachObjects2Objects = Hashtable.newFrom({"stomach": gdjs.BedroomCode.GDstomachObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects = Hashtable.newFrom({"leftwall": gdjs.BedroomCode.GDleftwallObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDstomachObjects1Objects = Hashtable.newFrom({"stomach": gdjs.BedroomCode.GDstomachObjects1});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects = Hashtable.newFrom({"rightwall": gdjs.BedroomCode.GDrightwallObjects1});
gdjs.BedroomCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stomach"), gdjs.BedroomCode.GDstomachObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDstomachObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDstomachObjects2[i].getVariableString(gdjs.BedroomCode.GDstomachObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDstomachObjects2[k] = gdjs.BedroomCode.GDstomachObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDstomachObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDstomachObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDstomachObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDstomachObjects2[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stomach"), gdjs.BedroomCode.GDstomachObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDstomachObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDstomachObjects2[i].getVariableString(gdjs.BedroomCode.GDstomachObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDstomachObjects2[k] = gdjs.BedroomCode.GDstomachObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDstomachObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDstomachObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDstomachObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDstomachObjects2[i].addForce(-(200), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leftwall"), gdjs.BedroomCode.GDleftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("stomach"), gdjs.BedroomCode.GDstomachObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDstomachObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDleftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDstomachObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDstomachObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDstomachObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDstomachObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDstomachObjects2[i].returnVariable(gdjs.BedroomCode.GDstomachObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rightwall"), gdjs.BedroomCode.GDrightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("stomach"), gdjs.BedroomCode.GDstomachObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDstomachObjects1Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDrightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDstomachObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDstomachObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDstomachObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.BedroomCode.GDstomachObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDstomachObjects1[i].returnVariable(gdjs.BedroomCode.GDstomachObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.BedroomCode.GDHollyObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.BedroomCode.GDbackObjects2});
gdjs.BedroomCode.eventsList25 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 100;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(20);
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.BedroomCode.GDHollyObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDlieObjects2Objects = Hashtable.newFrom({"lie": gdjs.BedroomCode.GDlieObjects2});
gdjs.BedroomCode.eventsList26 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 100;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(20);
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.BedroomCode.GDHollyObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDpillowObjects2Objects = Hashtable.newFrom({"pillow": gdjs.BedroomCode.GDpillowObjects2});
gdjs.BedroomCode.eventsList27 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 100;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(20);
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.BedroomCode.GDHollyObjects2});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDfetalObjects2Objects = Hashtable.newFrom({"fetal": gdjs.BedroomCode.GDfetalObjects2});
gdjs.BedroomCode.eventsList28 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 100;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(20);
}}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs.BedroomCode.GDHollyObjects1});
gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDstomachObjects1Objects = Hashtable.newFrom({"stomach": gdjs.BedroomCode.GDstomachObjects1});
gdjs.BedroomCode.eventsList29 = function(runtimeScene) {

{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 100;
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(20);
}}

}


};gdjs.BedroomCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BedroomCode.GDbackObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDbackObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDbackObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\mixkit-unlock-game-notification-253.wav", false, 20, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("lie"), gdjs.BedroomCode.GDlieObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDlieObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDlieObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDlieObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDlieObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\mixkit-unlock-game-notification-253.wav", false, 20, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("pillow"), gdjs.BedroomCode.GDpillowObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDpillowObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDpillowObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDpillowObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDpillowObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\mixkit-unlock-game-notification-253.wav", false, 20, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList27(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.BedroomCode.GDHollyObjects1, gdjs.BedroomCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("fetal"), gdjs.BedroomCode.GDfetalObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects2Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDfetalObjects2Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDfetalObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDfetalObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDfetalObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\mixkit-unlock-game-notification-253.wav", false, 20, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList28(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.BedroomCode.GDHollyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("stomach"), gdjs.BedroomCode.GDstomachObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDHollyObjects1Objects, gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDstomachObjects1Objects, false, runtimeScene, false);
}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDstomachObjects1 */
{for(var i = 0, len = gdjs.BedroomCode.GDstomachObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDstomachObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\mixkit-unlock-game-notification-253.wav", false, 20, 1);
}
{ //Subevents
gdjs.BedroomCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.BedroomCode.eventsList31 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.BedroomCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.BedroomCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDNewTextObjects2[i].setString("Your Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.BedroomCode.GDHollyObjects2);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BedroomCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.BedroomCode.GDHollyObjects2[i].hasAnimationEnded() ) {
        gdjs.BedroomCode.condition0IsTrue_0.val = true;
        gdjs.BedroomCode.GDHollyObjects2[k] = gdjs.BedroomCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.BedroomCode.GDHollyObjects2.length = k;}if (gdjs.BedroomCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BedroomCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects2[i].returnVariable(gdjs.BedroomCode.GDHollyObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


gdjs.BedroomCode.condition0IsTrue_0.val = false;
gdjs.BedroomCode.condition1IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.BedroomCode.condition0IsTrue_0.val ) {
{
{gdjs.BedroomCode.conditionTrue_1 = gdjs.BedroomCode.condition1IsTrue_0;
gdjs.BedroomCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9562668);
}
}}
if (gdjs.BedroomCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.BedroomCode.GDHollyObjects1);
{for(var i = 0, len = gdjs.BedroomCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.BedroomCode.GDHollyObjects1[i].returnVariable(gdjs.BedroomCode.GDHollyObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{ //Subevents
gdjs.BedroomCode.eventsList30(runtimeScene);} //End of subevents
}

}


};gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.BedroomCode.GDRetryObjects1});
gdjs.BedroomCode.eventsList32 = function(runtimeScene) {

{



}


{


gdjs.BedroomCode.eventsList3(runtimeScene);
}


{


gdjs.BedroomCode.eventsList9(runtimeScene);
}


{


gdjs.BedroomCode.eventsList10(runtimeScene);
}


{


gdjs.BedroomCode.eventsList11(runtimeScene);
}


{


gdjs.BedroomCode.eventsList12(runtimeScene);
}


{


{
{/* Unknown object - skipped. */}}

}


{


gdjs.BedroomCode.eventsList13(runtimeScene);
}


{


gdjs.BedroomCode.eventsList14(runtimeScene);
}


{


gdjs.BedroomCode.eventsList15(runtimeScene);
}


{


gdjs.BedroomCode.eventsList16(runtimeScene);
}


{


gdjs.BedroomCode.eventsList17(runtimeScene);
}


{


gdjs.BedroomCode.eventsList18(runtimeScene);
}


{


gdjs.BedroomCode.eventsList19(runtimeScene);
}


{


gdjs.BedroomCode.eventsList20(runtimeScene);
}


{


gdjs.BedroomCode.eventsList21(runtimeScene);
}


{


gdjs.BedroomCode.eventsList22(runtimeScene);
}


{


gdjs.BedroomCode.eventsList23(runtimeScene);
}


{


gdjs.BedroomCode.eventsList24(runtimeScene);
}


{


gdjs.BedroomCode.eventsList31(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.BedroomCode.GDRetryObjects1);

gdjs.BedroomCode.condition0IsTrue_0.val = false;
gdjs.BedroomCode.condition1IsTrue_0.val = false;
gdjs.BedroomCode.condition2IsTrue_0.val = false;
{
gdjs.BedroomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BedroomCode.condition0IsTrue_0.val ) {
{
gdjs.BedroomCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BedroomCode.mapOfGDgdjs_46BedroomCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BedroomCode.condition1IsTrue_0.val ) {
{
{gdjs.BedroomCode.conditionTrue_1 = gdjs.BedroomCode.condition2IsTrue_0;
gdjs.BedroomCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9569980);
}
}}
}
if (gdjs.BedroomCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.BedroomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BedroomCode.GDbackgroundObjects1.length = 0;
gdjs.BedroomCode.GDbackgroundObjects2.length = 0;
gdjs.BedroomCode.GDbackgroundObjects3.length = 0;
gdjs.BedroomCode.GDbackgroundObjects4.length = 0;
gdjs.BedroomCode.GDupfloorObjects1.length = 0;
gdjs.BedroomCode.GDupfloorObjects2.length = 0;
gdjs.BedroomCode.GDupfloorObjects3.length = 0;
gdjs.BedroomCode.GDupfloorObjects4.length = 0;
gdjs.BedroomCode.GDdownfloorObjects1.length = 0;
gdjs.BedroomCode.GDdownfloorObjects2.length = 0;
gdjs.BedroomCode.GDdownfloorObjects3.length = 0;
gdjs.BedroomCode.GDdownfloorObjects4.length = 0;
gdjs.BedroomCode.GDleftwallObjects1.length = 0;
gdjs.BedroomCode.GDleftwallObjects2.length = 0;
gdjs.BedroomCode.GDleftwallObjects3.length = 0;
gdjs.BedroomCode.GDleftwallObjects4.length = 0;
gdjs.BedroomCode.GDrightwallObjects1.length = 0;
gdjs.BedroomCode.GDrightwallObjects2.length = 0;
gdjs.BedroomCode.GDrightwallObjects3.length = 0;
gdjs.BedroomCode.GDrightwallObjects4.length = 0;
gdjs.BedroomCode.GDHollyObjects1.length = 0;
gdjs.BedroomCode.GDHollyObjects2.length = 0;
gdjs.BedroomCode.GDHollyObjects3.length = 0;
gdjs.BedroomCode.GDHollyObjects4.length = 0;
gdjs.BedroomCode.GDbackObjects1.length = 0;
gdjs.BedroomCode.GDbackObjects2.length = 0;
gdjs.BedroomCode.GDbackObjects3.length = 0;
gdjs.BedroomCode.GDbackObjects4.length = 0;
gdjs.BedroomCode.GDfetalObjects1.length = 0;
gdjs.BedroomCode.GDfetalObjects2.length = 0;
gdjs.BedroomCode.GDfetalObjects3.length = 0;
gdjs.BedroomCode.GDfetalObjects4.length = 0;
gdjs.BedroomCode.GDlieObjects1.length = 0;
gdjs.BedroomCode.GDlieObjects2.length = 0;
gdjs.BedroomCode.GDlieObjects3.length = 0;
gdjs.BedroomCode.GDlieObjects4.length = 0;
gdjs.BedroomCode.GDpillowObjects1.length = 0;
gdjs.BedroomCode.GDpillowObjects2.length = 0;
gdjs.BedroomCode.GDpillowObjects3.length = 0;
gdjs.BedroomCode.GDpillowObjects4.length = 0;
gdjs.BedroomCode.GDstomachObjects1.length = 0;
gdjs.BedroomCode.GDstomachObjects2.length = 0;
gdjs.BedroomCode.GDstomachObjects3.length = 0;
gdjs.BedroomCode.GDstomachObjects4.length = 0;
gdjs.BedroomCode.GDplatformObjects1.length = 0;
gdjs.BedroomCode.GDplatformObjects2.length = 0;
gdjs.BedroomCode.GDplatformObjects3.length = 0;
gdjs.BedroomCode.GDplatformObjects4.length = 0;
gdjs.BedroomCode.GDNewTextObjects1.length = 0;
gdjs.BedroomCode.GDNewTextObjects2.length = 0;
gdjs.BedroomCode.GDNewTextObjects3.length = 0;
gdjs.BedroomCode.GDNewTextObjects4.length = 0;
gdjs.BedroomCode.GDRetryObjects1.length = 0;
gdjs.BedroomCode.GDRetryObjects2.length = 0;
gdjs.BedroomCode.GDRetryObjects3.length = 0;
gdjs.BedroomCode.GDRetryObjects4.length = 0;

gdjs.BedroomCode.eventsList32(runtimeScene);
return;

}

gdjs['BedroomCode'] = gdjs.BedroomCode;
