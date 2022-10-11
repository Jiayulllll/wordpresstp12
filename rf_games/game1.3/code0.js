gdjs.ParkCode = {};
gdjs.ParkCode.GDHollyObjects1= [];
gdjs.ParkCode.GDHollyObjects2= [];
gdjs.ParkCode.GDHollyObjects3= [];
gdjs.ParkCode.GDHollyObjects4= [];
gdjs.ParkCode.GDstandObjects1= [];
gdjs.ParkCode.GDstandObjects2= [];
gdjs.ParkCode.GDstandObjects3= [];
gdjs.ParkCode.GDstandObjects4= [];
gdjs.ParkCode.GDwalkObjects1= [];
gdjs.ParkCode.GDwalkObjects2= [];
gdjs.ParkCode.GDwalkObjects3= [];
gdjs.ParkCode.GDwalkObjects4= [];
gdjs.ParkCode.GDsleepObjects1= [];
gdjs.ParkCode.GDsleepObjects2= [];
gdjs.ParkCode.GDsleepObjects3= [];
gdjs.ParkCode.GDsleepObjects4= [];
gdjs.ParkCode.GDjumpObjects1= [];
gdjs.ParkCode.GDjumpObjects2= [];
gdjs.ParkCode.GDjumpObjects3= [];
gdjs.ParkCode.GDjumpObjects4= [];
gdjs.ParkCode.GDdriveObjects1= [];
gdjs.ParkCode.GDdriveObjects2= [];
gdjs.ParkCode.GDdriveObjects3= [];
gdjs.ParkCode.GDdriveObjects4= [];
gdjs.ParkCode.GDliftObjects1= [];
gdjs.ParkCode.GDliftObjects2= [];
gdjs.ParkCode.GDliftObjects3= [];
gdjs.ParkCode.GDliftObjects4= [];
gdjs.ParkCode.GDreadObjects1= [];
gdjs.ParkCode.GDreadObjects2= [];
gdjs.ParkCode.GDreadObjects3= [];
gdjs.ParkCode.GDreadObjects4= [];
gdjs.ParkCode.GDsitObjects1= [];
gdjs.ParkCode.GDsitObjects2= [];
gdjs.ParkCode.GDsitObjects3= [];
gdjs.ParkCode.GDsitObjects4= [];
gdjs.ParkCode.GDLeftwallObjects1= [];
gdjs.ParkCode.GDLeftwallObjects2= [];
gdjs.ParkCode.GDLeftwallObjects3= [];
gdjs.ParkCode.GDLeftwallObjects4= [];
gdjs.ParkCode.GDRightwallObjects1= [];
gdjs.ParkCode.GDRightwallObjects2= [];
gdjs.ParkCode.GDRightwallObjects3= [];
gdjs.ParkCode.GDRightwallObjects4= [];
gdjs.ParkCode.GDbackgroundObjects1= [];
gdjs.ParkCode.GDbackgroundObjects2= [];
gdjs.ParkCode.GDbackgroundObjects3= [];
gdjs.ParkCode.GDbackgroundObjects4= [];
gdjs.ParkCode.GDRetryObjects1= [];
gdjs.ParkCode.GDRetryObjects2= [];
gdjs.ParkCode.GDRetryObjects3= [];
gdjs.ParkCode.GDRetryObjects4= [];
gdjs.ParkCode.GDText1Objects1= [];
gdjs.ParkCode.GDText1Objects2= [];
gdjs.ParkCode.GDText1Objects3= [];
gdjs.ParkCode.GDText1Objects4= [];
gdjs.ParkCode.GDNewSpriteObjects1= [];
gdjs.ParkCode.GDNewSpriteObjects2= [];
gdjs.ParkCode.GDNewSpriteObjects3= [];
gdjs.ParkCode.GDNewSpriteObjects4= [];
gdjs.ParkCode.GDNextObjects1= [];
gdjs.ParkCode.GDNextObjects2= [];
gdjs.ParkCode.GDNextObjects3= [];
gdjs.ParkCode.GDNextObjects4= [];

gdjs.ParkCode.conditionTrue_0 = {val:false};
gdjs.ParkCode.condition0IsTrue_0 = {val:false};
gdjs.ParkCode.condition1IsTrue_0 = {val:false};
gdjs.ParkCode.condition2IsTrue_0 = {val:false};
gdjs.ParkCode.condition3IsTrue_0 = {val:false};
gdjs.ParkCode.conditionTrue_1 = {val:false};
gdjs.ParkCode.condition0IsTrue_1 = {val:false};
gdjs.ParkCode.condition1IsTrue_1 = {val:false};
gdjs.ParkCode.condition2IsTrue_1 = {val:false};
gdjs.ParkCode.condition3IsTrue_1 = {val:false};


gdjs.ParkCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects2, gdjs.ParkCode.GDHollyObjects3);


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects3[k] = gdjs.ParkCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects3.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects3[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects2, gdjs.ParkCode.GDHollyObjects3);


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects3[k] = gdjs.ParkCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects3.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects2, gdjs.ParkCode.GDHollyObjects3);


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects3[k] = gdjs.ParkCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects3.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects3[i].setAnimationName("Falling");
}
}}

}


{


{
}

}


};gdjs.ParkCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.ParkCode.GDHollyObjects2 */

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects2[k] = gdjs.ParkCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects2[i].setAnimationName("Idle");
}
}}

}


};gdjs.ParkCode.eventsList2 = function(runtimeScene) {

{


gdjs.ParkCode.condition0IsTrue_0.val = false;
gdjs.ParkCode.condition1IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.ParkCode.condition0IsTrue_0.val ) {
{
{gdjs.ParkCode.conditionTrue_1 = gdjs.ParkCode.condition1IsTrue_0;
gdjs.ParkCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9471580);
}
}}
if (gdjs.ParkCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\cartoon-jump-6462.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects2[k] = gdjs.ParkCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ParkCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects2.length;i<l;++i) {
    if ( !(gdjs.ParkCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects2[k] = gdjs.ParkCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ParkCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects2[k] = gdjs.ParkCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.ParkCode.GDHollyObjects1 */

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects1[k] = gdjs.ParkCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects1.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects1[i].flipX(false);
}
}}

}


};gdjs.ParkCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.ParkCode.GDHollyObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects1[i].getVariableNumber(gdjs.ParkCode.GDHollyObjects1[i].getVariables().get("Attack")) == 0 ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects1[k] = gdjs.ParkCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects1.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ParkCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDstandObjects2Objects = Hashtable.newFrom({"stand": gdjs.ParkCode.GDstandObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDwalkObjects2Objects = Hashtable.newFrom({"walk": gdjs.ParkCode.GDwalkObjects2});
gdjs.ParkCode.eventsList4 = function(runtimeScene) {

{


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsleepObjects2Objects = Hashtable.newFrom({"sleep": gdjs.ParkCode.GDsleepObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDdriveObjects2Objects = Hashtable.newFrom({"drive": gdjs.ParkCode.GDdriveObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDjumpObjects2Objects = Hashtable.newFrom({"jump": gdjs.ParkCode.GDjumpObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsitObjects2Objects = Hashtable.newFrom({"sit": gdjs.ParkCode.GDsitObjects2});
gdjs.ParkCode.eventsList5 = function(runtimeScene) {

{


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDreadObjects2Objects = Hashtable.newFrom({"read": gdjs.ParkCode.GDreadObjects2});
gdjs.ParkCode.eventsList6 = function(runtimeScene) {

{


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs.ParkCode.GDHollyObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDliftObjects1Objects = Hashtable.newFrom({"lift": gdjs.ParkCode.GDliftObjects1});
gdjs.ParkCode.eventsList7 = function(runtimeScene) {

{


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.ParkCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);


gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects2[i].getVariableNumber(gdjs.ParkCode.GDHollyObjects2[i].getVariables().get("Attack")) == 1 ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects2[k] = gdjs.ParkCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects2[i].setAnimationName("Ground smash");
}
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("stand"), gdjs.ParkCode.GDstandObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDstandObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDstandObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDstandObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDstandObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("walk"), gdjs.ParkCode.GDwalkObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDwalkObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDwalkObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDwalkObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDwalkObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.ParkCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("sleep"), gdjs.ParkCode.GDsleepObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsleepObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDsleepObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDsleepObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDsleepObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("drive"), gdjs.ParkCode.GDdriveObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDdriveObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDdriveObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDdriveObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDdriveObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.ParkCode.GDjumpObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDjumpObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDjumpObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDjumpObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 30, 1.3);
}}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("sit"), gdjs.ParkCode.GDsitObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsitObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDsitObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDsitObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDsitObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.ParkCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.ParkCode.GDHollyObjects1, gdjs.ParkCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("read"), gdjs.ParkCode.GDreadObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDreadObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDreadObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDreadObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDreadObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.ParkCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.ParkCode.GDHollyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("lift"), gdjs.ParkCode.GDliftObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDHollyObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDliftObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDliftObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDliftObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDliftObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 30, 1);
}
{ //Subevents
gdjs.ParkCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.ParkCode.eventsList9 = function(runtimeScene) {

{


gdjs.ParkCode.condition0IsTrue_0.val = false;
gdjs.ParkCode.condition1IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.ParkCode.condition0IsTrue_0.val ) {
{
{gdjs.ParkCode.conditionTrue_1 = gdjs.ParkCode.condition1IsTrue_0;
gdjs.ParkCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9477492);
}
}}
if (gdjs.ParkCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.ParkCode.GDHollyObjects1);
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects1[i].returnVariable(gdjs.ParkCode.GDHollyObjects1[i].getVariables().get("Attack")).setNumber(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\whip01-6952.mp3", false, 20, 0.8);
}
{ //Subevents
gdjs.ParkCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.ParkCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.ParkCode.GDHollyObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.ParkCode.GDHollyObjects1[i].hasAnimationEnded() ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDHollyObjects1[k] = gdjs.ParkCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.ParkCode.GDHollyObjects1.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDHollyObjects1[i].returnVariable(gdjs.ParkCode.GDHollyObjects1[i].getVariables().get("Attack")).setNumber(0);
}
}}

}


};gdjs.ParkCode.eventsList11 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.ParkCode.GDHollyObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.ParkCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.ParkCode.GDHollyObjects1[0].getPointX("")) + 60, 0.05), "", 0);
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRetryObjects2Objects = Hashtable.newFrom({"Retry": gdjs.ParkCode.GDRetryObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDNextObjects1Objects = Hashtable.newFrom({"Next": gdjs.ParkCode.GDNextObjects1});
gdjs.ParkCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.ParkCode.GDRetryObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
gdjs.ParkCode.condition1IsTrue_0.val = false;
gdjs.ParkCode.condition2IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ParkCode.condition0IsTrue_0.val ) {
{
gdjs.ParkCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRetryObjects2Objects, runtimeScene, true, false);
}if ( gdjs.ParkCode.condition1IsTrue_0.val ) {
{
{gdjs.ParkCode.conditionTrue_1 = gdjs.ParkCode.condition2IsTrue_0;
gdjs.ParkCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9490508);
}
}}
}
if (gdjs.ParkCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.ParkCode.GDNextObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
gdjs.ParkCode.condition1IsTrue_0.val = false;
gdjs.ParkCode.condition2IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ParkCode.condition0IsTrue_0.val ) {
{
gdjs.ParkCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ParkCode.condition1IsTrue_0.val ) {
{
{gdjs.ParkCode.conditionTrue_1 = gdjs.ParkCode.condition2IsTrue_0;
gdjs.ParkCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9491476);
}
}}
}
if (gdjs.ParkCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bedroom", false);
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDdriveObjects2Objects = Hashtable.newFrom({"drive": gdjs.ParkCode.GDdriveObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects = Hashtable.newFrom({"Leftwall": gdjs.ParkCode.GDLeftwallObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDdriveObjects1Objects = Hashtable.newFrom({"drive": gdjs.ParkCode.GDdriveObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects = Hashtable.newFrom({"Rightwall": gdjs.ParkCode.GDRightwallObjects1});
gdjs.ParkCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("drive"), gdjs.ParkCode.GDdriveObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDdriveObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDdriveObjects2[i].getVariableString(gdjs.ParkCode.GDdriveObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDdriveObjects2[k] = gdjs.ParkCode.GDdriveObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDdriveObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDdriveObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDdriveObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDdriveObjects2[i].addForce(800, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("drive"), gdjs.ParkCode.GDdriveObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDdriveObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDdriveObjects2[i].getVariableString(gdjs.ParkCode.GDdriveObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDdriveObjects2[k] = gdjs.ParkCode.GDdriveObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDdriveObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDdriveObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDdriveObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDdriveObjects2[i].addForce(-(500), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftwall"), gdjs.ParkCode.GDLeftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("drive"), gdjs.ParkCode.GDdriveObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDdriveObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDdriveObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDdriveObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDdriveObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.ParkCode.GDdriveObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDdriveObjects2[i].returnVariable(gdjs.ParkCode.GDdriveObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rightwall"), gdjs.ParkCode.GDRightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("drive"), gdjs.ParkCode.GDdriveObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDdriveObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDdriveObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDdriveObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDdriveObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.ParkCode.GDdriveObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDdriveObjects1[i].returnVariable(gdjs.ParkCode.GDdriveObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDliftObjects2Objects = Hashtable.newFrom({"lift": gdjs.ParkCode.GDliftObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects = Hashtable.newFrom({"Leftwall": gdjs.ParkCode.GDLeftwallObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDliftObjects1Objects = Hashtable.newFrom({"lift": gdjs.ParkCode.GDliftObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects = Hashtable.newFrom({"Rightwall": gdjs.ParkCode.GDRightwallObjects1});
gdjs.ParkCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("lift"), gdjs.ParkCode.GDliftObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDliftObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDliftObjects2[i].getVariableString(gdjs.ParkCode.GDliftObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDliftObjects2[k] = gdjs.ParkCode.GDliftObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDliftObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDliftObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDliftObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDliftObjects2[i].addForce(600, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lift"), gdjs.ParkCode.GDliftObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDliftObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDliftObjects2[i].getVariableString(gdjs.ParkCode.GDliftObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDliftObjects2[k] = gdjs.ParkCode.GDliftObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDliftObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDliftObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDliftObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDliftObjects2[i].addForce(-(800), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftwall"), gdjs.ParkCode.GDLeftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("lift"), gdjs.ParkCode.GDliftObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDliftObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDliftObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDliftObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDliftObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.ParkCode.GDliftObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDliftObjects2[i].returnVariable(gdjs.ParkCode.GDliftObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rightwall"), gdjs.ParkCode.GDRightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("lift"), gdjs.ParkCode.GDliftObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDliftObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDliftObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDliftObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDliftObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.ParkCode.GDliftObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDliftObjects1[i].returnVariable(gdjs.ParkCode.GDliftObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDstandObjects2Objects = Hashtable.newFrom({"stand": gdjs.ParkCode.GDstandObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects = Hashtable.newFrom({"Leftwall": gdjs.ParkCode.GDLeftwallObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDstandObjects1Objects = Hashtable.newFrom({"stand": gdjs.ParkCode.GDstandObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects = Hashtable.newFrom({"Rightwall": gdjs.ParkCode.GDRightwallObjects1});
gdjs.ParkCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stand"), gdjs.ParkCode.GDstandObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDstandObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDstandObjects2[i].getVariableString(gdjs.ParkCode.GDstandObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDstandObjects2[k] = gdjs.ParkCode.GDstandObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDstandObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDstandObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDstandObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDstandObjects2[i].addForce(500, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("stand"), gdjs.ParkCode.GDstandObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDstandObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDstandObjects2[i].getVariableString(gdjs.ParkCode.GDstandObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDstandObjects2[k] = gdjs.ParkCode.GDstandObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDstandObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDstandObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDstandObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDstandObjects2[i].addForce(-(700), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftwall"), gdjs.ParkCode.GDLeftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("stand"), gdjs.ParkCode.GDstandObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDstandObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDstandObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDstandObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDstandObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.ParkCode.GDstandObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDstandObjects2[i].returnVariable(gdjs.ParkCode.GDstandObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rightwall"), gdjs.ParkCode.GDRightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("stand"), gdjs.ParkCode.GDstandObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDstandObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDstandObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDstandObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDstandObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.ParkCode.GDstandObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDstandObjects1[i].returnVariable(gdjs.ParkCode.GDstandObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDreadObjects2Objects = Hashtable.newFrom({"read": gdjs.ParkCode.GDreadObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects = Hashtable.newFrom({"Leftwall": gdjs.ParkCode.GDLeftwallObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDreadObjects1Objects = Hashtable.newFrom({"read": gdjs.ParkCode.GDreadObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects = Hashtable.newFrom({"Rightwall": gdjs.ParkCode.GDRightwallObjects1});
gdjs.ParkCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("read"), gdjs.ParkCode.GDreadObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDreadObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDreadObjects2[i].getVariableString(gdjs.ParkCode.GDreadObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDreadObjects2[k] = gdjs.ParkCode.GDreadObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDreadObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDreadObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDreadObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDreadObjects2[i].addForce(300, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("read"), gdjs.ParkCode.GDreadObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDreadObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDreadObjects2[i].getVariableString(gdjs.ParkCode.GDreadObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDreadObjects2[k] = gdjs.ParkCode.GDreadObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDreadObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDreadObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDreadObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDreadObjects2[i].addForce(-(400), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftwall"), gdjs.ParkCode.GDLeftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("read"), gdjs.ParkCode.GDreadObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDreadObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDreadObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDreadObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDreadObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.ParkCode.GDreadObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDreadObjects2[i].returnVariable(gdjs.ParkCode.GDreadObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rightwall"), gdjs.ParkCode.GDRightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("read"), gdjs.ParkCode.GDreadObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDreadObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDreadObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDreadObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDreadObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.ParkCode.GDreadObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDreadObjects1[i].returnVariable(gdjs.ParkCode.GDreadObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsitObjects2Objects = Hashtable.newFrom({"sit": gdjs.ParkCode.GDsitObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects = Hashtable.newFrom({"Leftwall": gdjs.ParkCode.GDLeftwallObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsitObjects1Objects = Hashtable.newFrom({"sit": gdjs.ParkCode.GDsitObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects = Hashtable.newFrom({"Rightwall": gdjs.ParkCode.GDRightwallObjects1});
gdjs.ParkCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("sit"), gdjs.ParkCode.GDsitObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDsitObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDsitObjects2[i].getVariableString(gdjs.ParkCode.GDsitObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDsitObjects2[k] = gdjs.ParkCode.GDsitObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDsitObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDsitObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDsitObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDsitObjects2[i].addForce(700, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sit"), gdjs.ParkCode.GDsitObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDsitObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDsitObjects2[i].getVariableString(gdjs.ParkCode.GDsitObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDsitObjects2[k] = gdjs.ParkCode.GDsitObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDsitObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDsitObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDsitObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDsitObjects2[i].addForce(-(500), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftwall"), gdjs.ParkCode.GDLeftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("sit"), gdjs.ParkCode.GDsitObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsitObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDsitObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDsitObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDsitObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.ParkCode.GDsitObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDsitObjects2[i].returnVariable(gdjs.ParkCode.GDsitObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rightwall"), gdjs.ParkCode.GDRightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("sit"), gdjs.ParkCode.GDsitObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDsitObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDsitObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDsitObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDsitObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.ParkCode.GDsitObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDsitObjects1[i].returnVariable(gdjs.ParkCode.GDsitObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDwalkObjects2Objects = Hashtable.newFrom({"walk": gdjs.ParkCode.GDwalkObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects = Hashtable.newFrom({"Leftwall": gdjs.ParkCode.GDLeftwallObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDwalkObjects1Objects = Hashtable.newFrom({"walk": gdjs.ParkCode.GDwalkObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects = Hashtable.newFrom({"Rightwall": gdjs.ParkCode.GDRightwallObjects1});
gdjs.ParkCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("walk"), gdjs.ParkCode.GDwalkObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDwalkObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDwalkObjects2[i].getVariableString(gdjs.ParkCode.GDwalkObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDwalkObjects2[k] = gdjs.ParkCode.GDwalkObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDwalkObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDwalkObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDwalkObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDwalkObjects2[i].addForce(700, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("walk"), gdjs.ParkCode.GDwalkObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDwalkObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDwalkObjects2[i].getVariableString(gdjs.ParkCode.GDwalkObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDwalkObjects2[k] = gdjs.ParkCode.GDwalkObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDwalkObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDwalkObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDwalkObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDwalkObjects2[i].addForce(-(200), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftwall"), gdjs.ParkCode.GDLeftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("walk"), gdjs.ParkCode.GDwalkObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDwalkObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDwalkObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDwalkObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDwalkObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.ParkCode.GDwalkObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDwalkObjects2[i].returnVariable(gdjs.ParkCode.GDwalkObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rightwall"), gdjs.ParkCode.GDRightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("walk"), gdjs.ParkCode.GDwalkObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDwalkObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDwalkObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDwalkObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDwalkObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.ParkCode.GDwalkObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDwalkObjects1[i].returnVariable(gdjs.ParkCode.GDwalkObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDjumpObjects2Objects = Hashtable.newFrom({"jump": gdjs.ParkCode.GDjumpObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects = Hashtable.newFrom({"Leftwall": gdjs.ParkCode.GDLeftwallObjects2});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDjumpObjects1Objects = Hashtable.newFrom({"jump": gdjs.ParkCode.GDjumpObjects1});
gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects = Hashtable.newFrom({"Rightwall": gdjs.ParkCode.GDRightwallObjects1});
gdjs.ParkCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.ParkCode.GDjumpObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDjumpObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDjumpObjects2[i].getVariableString(gdjs.ParkCode.GDjumpObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDjumpObjects2[k] = gdjs.ParkCode.GDjumpObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDjumpObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDjumpObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDjumpObjects2[i].addForce(500, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.ParkCode.GDjumpObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ParkCode.GDjumpObjects2.length;i<l;++i) {
    if ( gdjs.ParkCode.GDjumpObjects2[i].getVariableString(gdjs.ParkCode.GDjumpObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.ParkCode.condition0IsTrue_0.val = true;
        gdjs.ParkCode.GDjumpObjects2[k] = gdjs.ParkCode.GDjumpObjects2[i];
        ++k;
    }
}
gdjs.ParkCode.GDjumpObjects2.length = k;}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDjumpObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDjumpObjects2[i].addForce(-(500), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftwall"), gdjs.ParkCode.GDLeftwallObjects2);
gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.ParkCode.GDjumpObjects2);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDjumpObjects2Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDLeftwallObjects2Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDjumpObjects2 */
{for(var i = 0, len = gdjs.ParkCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDjumpObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.ParkCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.ParkCode.GDjumpObjects2[i].returnVariable(gdjs.ParkCode.GDjumpObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rightwall"), gdjs.ParkCode.GDRightwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.ParkCode.GDjumpObjects1);

gdjs.ParkCode.condition0IsTrue_0.val = false;
{
gdjs.ParkCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDjumpObjects1Objects, gdjs.ParkCode.mapOfGDgdjs_46ParkCode_46GDRightwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.ParkCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ParkCode.GDjumpObjects1 */
{for(var i = 0, len = gdjs.ParkCode.GDjumpObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDjumpObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.ParkCode.GDjumpObjects1.length ;i < len;++i) {
    gdjs.ParkCode.GDjumpObjects1[i].returnVariable(gdjs.ParkCode.GDjumpObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.ParkCode.eventsList20 = function(runtimeScene) {

{


gdjs.ParkCode.eventsList3(runtimeScene);
}


{


gdjs.ParkCode.eventsList9(runtimeScene);
}


{


gdjs.ParkCode.eventsList10(runtimeScene);
}


{


gdjs.ParkCode.eventsList11(runtimeScene);
}


{


gdjs.ParkCode.eventsList12(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.ParkCode.GDText1Objects1);
{for(var i = 0, len = gdjs.ParkCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.ParkCode.GDText1Objects1[i].setString("Your Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.ParkCode.eventsList13(runtimeScene);
}


{


gdjs.ParkCode.eventsList14(runtimeScene);
}


{


gdjs.ParkCode.eventsList15(runtimeScene);
}


{


gdjs.ParkCode.eventsList16(runtimeScene);
}


{


gdjs.ParkCode.eventsList17(runtimeScene);
}


{


gdjs.ParkCode.eventsList18(runtimeScene);
}


{


gdjs.ParkCode.eventsList19(runtimeScene);
}


};

gdjs.ParkCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ParkCode.GDHollyObjects1.length = 0;
gdjs.ParkCode.GDHollyObjects2.length = 0;
gdjs.ParkCode.GDHollyObjects3.length = 0;
gdjs.ParkCode.GDHollyObjects4.length = 0;
gdjs.ParkCode.GDstandObjects1.length = 0;
gdjs.ParkCode.GDstandObjects2.length = 0;
gdjs.ParkCode.GDstandObjects3.length = 0;
gdjs.ParkCode.GDstandObjects4.length = 0;
gdjs.ParkCode.GDwalkObjects1.length = 0;
gdjs.ParkCode.GDwalkObjects2.length = 0;
gdjs.ParkCode.GDwalkObjects3.length = 0;
gdjs.ParkCode.GDwalkObjects4.length = 0;
gdjs.ParkCode.GDsleepObjects1.length = 0;
gdjs.ParkCode.GDsleepObjects2.length = 0;
gdjs.ParkCode.GDsleepObjects3.length = 0;
gdjs.ParkCode.GDsleepObjects4.length = 0;
gdjs.ParkCode.GDjumpObjects1.length = 0;
gdjs.ParkCode.GDjumpObjects2.length = 0;
gdjs.ParkCode.GDjumpObjects3.length = 0;
gdjs.ParkCode.GDjumpObjects4.length = 0;
gdjs.ParkCode.GDdriveObjects1.length = 0;
gdjs.ParkCode.GDdriveObjects2.length = 0;
gdjs.ParkCode.GDdriveObjects3.length = 0;
gdjs.ParkCode.GDdriveObjects4.length = 0;
gdjs.ParkCode.GDliftObjects1.length = 0;
gdjs.ParkCode.GDliftObjects2.length = 0;
gdjs.ParkCode.GDliftObjects3.length = 0;
gdjs.ParkCode.GDliftObjects4.length = 0;
gdjs.ParkCode.GDreadObjects1.length = 0;
gdjs.ParkCode.GDreadObjects2.length = 0;
gdjs.ParkCode.GDreadObjects3.length = 0;
gdjs.ParkCode.GDreadObjects4.length = 0;
gdjs.ParkCode.GDsitObjects1.length = 0;
gdjs.ParkCode.GDsitObjects2.length = 0;
gdjs.ParkCode.GDsitObjects3.length = 0;
gdjs.ParkCode.GDsitObjects4.length = 0;
gdjs.ParkCode.GDLeftwallObjects1.length = 0;
gdjs.ParkCode.GDLeftwallObjects2.length = 0;
gdjs.ParkCode.GDLeftwallObjects3.length = 0;
gdjs.ParkCode.GDLeftwallObjects4.length = 0;
gdjs.ParkCode.GDRightwallObjects1.length = 0;
gdjs.ParkCode.GDRightwallObjects2.length = 0;
gdjs.ParkCode.GDRightwallObjects3.length = 0;
gdjs.ParkCode.GDRightwallObjects4.length = 0;
gdjs.ParkCode.GDbackgroundObjects1.length = 0;
gdjs.ParkCode.GDbackgroundObjects2.length = 0;
gdjs.ParkCode.GDbackgroundObjects3.length = 0;
gdjs.ParkCode.GDbackgroundObjects4.length = 0;
gdjs.ParkCode.GDRetryObjects1.length = 0;
gdjs.ParkCode.GDRetryObjects2.length = 0;
gdjs.ParkCode.GDRetryObjects3.length = 0;
gdjs.ParkCode.GDRetryObjects4.length = 0;
gdjs.ParkCode.GDText1Objects1.length = 0;
gdjs.ParkCode.GDText1Objects2.length = 0;
gdjs.ParkCode.GDText1Objects3.length = 0;
gdjs.ParkCode.GDText1Objects4.length = 0;
gdjs.ParkCode.GDNewSpriteObjects1.length = 0;
gdjs.ParkCode.GDNewSpriteObjects2.length = 0;
gdjs.ParkCode.GDNewSpriteObjects3.length = 0;
gdjs.ParkCode.GDNewSpriteObjects4.length = 0;
gdjs.ParkCode.GDNextObjects1.length = 0;
gdjs.ParkCode.GDNextObjects2.length = 0;
gdjs.ParkCode.GDNextObjects3.length = 0;
gdjs.ParkCode.GDNextObjects4.length = 0;

gdjs.ParkCode.eventsList20(runtimeScene);
return;

}

gdjs['ParkCode'] = gdjs.ParkCode;
