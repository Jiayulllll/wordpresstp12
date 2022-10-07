gdjs.MainGameCode = {};
gdjs.MainGameCode.GDstandObjects1= [];
gdjs.MainGameCode.GDstandObjects2= [];
gdjs.MainGameCode.GDstandObjects3= [];
gdjs.MainGameCode.GDstandObjects4= [];
gdjs.MainGameCode.GDHollyObjects1= [];
gdjs.MainGameCode.GDHollyObjects2= [];
gdjs.MainGameCode.GDHollyObjects3= [];
gdjs.MainGameCode.GDHollyObjects4= [];
gdjs.MainGameCode.GDwalkObjects1= [];
gdjs.MainGameCode.GDwalkObjects2= [];
gdjs.MainGameCode.GDwalkObjects3= [];
gdjs.MainGameCode.GDwalkObjects4= [];
gdjs.MainGameCode.GDNewTiledSpriteObjects1= [];
gdjs.MainGameCode.GDNewTiledSpriteObjects2= [];
gdjs.MainGameCode.GDNewTiledSpriteObjects3= [];
gdjs.MainGameCode.GDNewTiledSpriteObjects4= [];
gdjs.MainGameCode.GDNewTiledSprite2Objects1= [];
gdjs.MainGameCode.GDNewTiledSprite2Objects2= [];
gdjs.MainGameCode.GDNewTiledSprite2Objects3= [];
gdjs.MainGameCode.GDNewTiledSprite2Objects4= [];
gdjs.MainGameCode.GDsleepObjects1= [];
gdjs.MainGameCode.GDsleepObjects2= [];
gdjs.MainGameCode.GDsleepObjects3= [];
gdjs.MainGameCode.GDsleepObjects4= [];
gdjs.MainGameCode.GDjumpObjects1= [];
gdjs.MainGameCode.GDjumpObjects2= [];
gdjs.MainGameCode.GDjumpObjects3= [];
gdjs.MainGameCode.GDjumpObjects4= [];
gdjs.MainGameCode.GDdriveObjects1= [];
gdjs.MainGameCode.GDdriveObjects2= [];
gdjs.MainGameCode.GDdriveObjects3= [];
gdjs.MainGameCode.GDdriveObjects4= [];
gdjs.MainGameCode.GDliftObjects1= [];
gdjs.MainGameCode.GDliftObjects2= [];
gdjs.MainGameCode.GDliftObjects3= [];
gdjs.MainGameCode.GDliftObjects4= [];
gdjs.MainGameCode.GDreadObjects1= [];
gdjs.MainGameCode.GDreadObjects2= [];
gdjs.MainGameCode.GDreadObjects3= [];
gdjs.MainGameCode.GDreadObjects4= [];
gdjs.MainGameCode.GDsitObjects1= [];
gdjs.MainGameCode.GDsitObjects2= [];
gdjs.MainGameCode.GDsitObjects3= [];
gdjs.MainGameCode.GDsitObjects4= [];
gdjs.MainGameCode.GDRetryObjects1= [];
gdjs.MainGameCode.GDRetryObjects2= [];
gdjs.MainGameCode.GDRetryObjects3= [];
gdjs.MainGameCode.GDRetryObjects4= [];
gdjs.MainGameCode.GDText1Objects1= [];
gdjs.MainGameCode.GDText1Objects2= [];
gdjs.MainGameCode.GDText1Objects3= [];
gdjs.MainGameCode.GDText1Objects4= [];

gdjs.MainGameCode.conditionTrue_0 = {val:false};
gdjs.MainGameCode.condition0IsTrue_0 = {val:false};
gdjs.MainGameCode.condition1IsTrue_0 = {val:false};
gdjs.MainGameCode.condition2IsTrue_0 = {val:false};
gdjs.MainGameCode.condition3IsTrue_0 = {val:false};
gdjs.MainGameCode.conditionTrue_1 = {val:false};
gdjs.MainGameCode.condition0IsTrue_1 = {val:false};
gdjs.MainGameCode.condition1IsTrue_1 = {val:false};
gdjs.MainGameCode.condition2IsTrue_1 = {val:false};
gdjs.MainGameCode.condition3IsTrue_1 = {val:false};


gdjs.MainGameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects2, gdjs.MainGameCode.GDHollyObjects3);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects3[k] = gdjs.MainGameCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects3.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects3[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects2, gdjs.MainGameCode.GDHollyObjects3);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects3[k] = gdjs.MainGameCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects3.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects2, gdjs.MainGameCode.GDHollyObjects3);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects3[k] = gdjs.MainGameCode.GDHollyObjects3[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects3.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects3 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects3.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects3[i].setAnimationName("Falling");
}
}}

}


{


{
}

}


};gdjs.MainGameCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.MainGameCode.GDHollyObjects2 */

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects2[k] = gdjs.MainGameCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects2[i].setAnimationName("Idle");
}
}}

}


};gdjs.MainGameCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition1IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8769340);
}
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\cartoon-jump-6462.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects2[k] = gdjs.MainGameCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects2.length;i<l;++i) {
    if ( !(gdjs.MainGameCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects2[k] = gdjs.MainGameCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects2[k] = gdjs.MainGameCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.MainGameCode.GDHollyObjects1 */

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects1[k] = gdjs.MainGameCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects1[i].flipX(false);
}
}}

}


};gdjs.MainGameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.MainGameCode.GDHollyObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects1[i].getVariableNumber(gdjs.MainGameCode.GDHollyObjects1[i].getVariables().get("Attack")) == 0 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects1[k] = gdjs.MainGameCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainGameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDstandObjects2Objects = Hashtable.newFrom({"stand": gdjs.MainGameCode.GDstandObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDwalkObjects2Objects = Hashtable.newFrom({"walk": gdjs.MainGameCode.GDwalkObjects2});
gdjs.MainGameCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDsleepObjects2Objects = Hashtable.newFrom({"sleep": gdjs.MainGameCode.GDsleepObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDdriveObjects2Objects = Hashtable.newFrom({"drive": gdjs.MainGameCode.GDdriveObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDjumpObjects2Objects = Hashtable.newFrom({"jump": gdjs.MainGameCode.GDjumpObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDsitObjects2Objects = Hashtable.newFrom({"sit": gdjs.MainGameCode.GDsitObjects2});
gdjs.MainGameCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects2});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDreadObjects2Objects = Hashtable.newFrom({"read": gdjs.MainGameCode.GDreadObjects2});
gdjs.MainGameCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs.MainGameCode.GDHollyObjects1});
gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDliftObjects1Objects = Hashtable.newFrom({"lift": gdjs.MainGameCode.GDliftObjects1});
gdjs.MainGameCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(25);
}}

}


};gdjs.MainGameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);


gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects2[i].getVariableNumber(gdjs.MainGameCode.GDHollyObjects2[i].getVariables().get("Attack")) == 1 ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects2[k] = gdjs.MainGameCode.GDHollyObjects2[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects2.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects2[i].setAnimationName("Ground smash");
}
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("stand"), gdjs.MainGameCode.GDstandObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDstandObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDstandObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDstandObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDstandObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 100, 1.3);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("walk"), gdjs.MainGameCode.GDwalkObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDwalkObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDwalkObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDwalkObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDwalkObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MainGameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("sleep"), gdjs.MainGameCode.GDsleepObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDsleepObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDsleepObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDsleepObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDsleepObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 100, 1.3);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("drive"), gdjs.MainGameCode.GDdriveObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDdriveObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDdriveObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDdriveObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDdriveObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 100, 1.3);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.MainGameCode.GDjumpObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDjumpObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDjumpObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDjumpObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDjumpObjects2[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-yeah-96951.mp3", false, 100, 1.3);
}}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("sit"), gdjs.MainGameCode.GDsitObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDsitObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDsitObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDsitObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDsitObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MainGameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MainGameCode.GDHollyObjects1, gdjs.MainGameCode.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("read"), gdjs.MainGameCode.GDreadObjects2);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects2Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDreadObjects2Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDreadObjects2 */
{for(var i = 0, len = gdjs.MainGameCode.GDreadObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDreadObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MainGameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MainGameCode.GDHollyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("lift"), gdjs.MainGameCode.GDliftObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDHollyObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDliftObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDliftObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDliftObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDliftObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\oh-no-113125.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MainGameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MainGameCode.eventsList9 = function(runtimeScene) {

{


gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition1IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8775252);
}
}}
if (gdjs.MainGameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.MainGameCode.GDHollyObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects1[i].returnVariable(gdjs.MainGameCode.GDHollyObjects1[i].getVariables().get("Attack")).setNumber(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\whip01-6952.mp3", false, 100, 0.8);
}
{ //Subevents
gdjs.MainGameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MainGameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.MainGameCode.GDHollyObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainGameCode.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDHollyObjects1[i].hasAnimationEnded() ) {
        gdjs.MainGameCode.condition0IsTrue_0.val = true;
        gdjs.MainGameCode.GDHollyObjects1[k] = gdjs.MainGameCode.GDHollyObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDHollyObjects1.length = k;}if (gdjs.MainGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainGameCode.GDHollyObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDHollyObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDHollyObjects1[i].returnVariable(gdjs.MainGameCode.GDHollyObjects1[i].getVariables().get("Attack")).setNumber(0);
}
}}

}


};gdjs.MainGameCode.eventsList11 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs.MainGameCode.GDHollyObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.MainGameCode.GDHollyObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDHollyObjects1[0].getPointX("")) + 60, 0.05), "", 0);
}}

}


};gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.MainGameCode.GDRetryObjects1});
gdjs.MainGameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.MainGameCode.GDRetryObjects1);

gdjs.MainGameCode.condition0IsTrue_0.val = false;
gdjs.MainGameCode.condition1IsTrue_0.val = false;
gdjs.MainGameCode.condition2IsTrue_0.val = false;
{
gdjs.MainGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainGameCode.condition0IsTrue_0.val ) {
{
gdjs.MainGameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_46MainGameCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainGameCode.condition1IsTrue_0.val ) {
{
{gdjs.MainGameCode.conditionTrue_1 = gdjs.MainGameCode.condition2IsTrue_0;
gdjs.MainGameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8788276);
}
}}
}
if (gdjs.MainGameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.MainGameCode.eventsList13 = function(runtimeScene) {

{


gdjs.MainGameCode.eventsList3(runtimeScene);
}


{


gdjs.MainGameCode.eventsList9(runtimeScene);
}


{


gdjs.MainGameCode.eventsList10(runtimeScene);
}


{


gdjs.MainGameCode.eventsList11(runtimeScene);
}


{


gdjs.MainGameCode.eventsList12(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Text1"), gdjs.MainGameCode.GDText1Objects1);
{for(var i = 0, len = gdjs.MainGameCode.GDText1Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDText1Objects1[i].setString("Your Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.MainGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameCode.GDstandObjects1.length = 0;
gdjs.MainGameCode.GDstandObjects2.length = 0;
gdjs.MainGameCode.GDstandObjects3.length = 0;
gdjs.MainGameCode.GDstandObjects4.length = 0;
gdjs.MainGameCode.GDHollyObjects1.length = 0;
gdjs.MainGameCode.GDHollyObjects2.length = 0;
gdjs.MainGameCode.GDHollyObjects3.length = 0;
gdjs.MainGameCode.GDHollyObjects4.length = 0;
gdjs.MainGameCode.GDwalkObjects1.length = 0;
gdjs.MainGameCode.GDwalkObjects2.length = 0;
gdjs.MainGameCode.GDwalkObjects3.length = 0;
gdjs.MainGameCode.GDwalkObjects4.length = 0;
gdjs.MainGameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainGameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainGameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.MainGameCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.MainGameCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.MainGameCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.MainGameCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.MainGameCode.GDNewTiledSprite2Objects4.length = 0;
gdjs.MainGameCode.GDsleepObjects1.length = 0;
gdjs.MainGameCode.GDsleepObjects2.length = 0;
gdjs.MainGameCode.GDsleepObjects3.length = 0;
gdjs.MainGameCode.GDsleepObjects4.length = 0;
gdjs.MainGameCode.GDjumpObjects1.length = 0;
gdjs.MainGameCode.GDjumpObjects2.length = 0;
gdjs.MainGameCode.GDjumpObjects3.length = 0;
gdjs.MainGameCode.GDjumpObjects4.length = 0;
gdjs.MainGameCode.GDdriveObjects1.length = 0;
gdjs.MainGameCode.GDdriveObjects2.length = 0;
gdjs.MainGameCode.GDdriveObjects3.length = 0;
gdjs.MainGameCode.GDdriveObjects4.length = 0;
gdjs.MainGameCode.GDliftObjects1.length = 0;
gdjs.MainGameCode.GDliftObjects2.length = 0;
gdjs.MainGameCode.GDliftObjects3.length = 0;
gdjs.MainGameCode.GDliftObjects4.length = 0;
gdjs.MainGameCode.GDreadObjects1.length = 0;
gdjs.MainGameCode.GDreadObjects2.length = 0;
gdjs.MainGameCode.GDreadObjects3.length = 0;
gdjs.MainGameCode.GDreadObjects4.length = 0;
gdjs.MainGameCode.GDsitObjects1.length = 0;
gdjs.MainGameCode.GDsitObjects2.length = 0;
gdjs.MainGameCode.GDsitObjects3.length = 0;
gdjs.MainGameCode.GDsitObjects4.length = 0;
gdjs.MainGameCode.GDRetryObjects1.length = 0;
gdjs.MainGameCode.GDRetryObjects2.length = 0;
gdjs.MainGameCode.GDRetryObjects3.length = 0;
gdjs.MainGameCode.GDRetryObjects4.length = 0;
gdjs.MainGameCode.GDText1Objects1.length = 0;
gdjs.MainGameCode.GDText1Objects2.length = 0;
gdjs.MainGameCode.GDText1Objects3.length = 0;
gdjs.MainGameCode.GDText1Objects4.length = 0;

gdjs.MainGameCode.eventsList13(runtimeScene);
return;

}

gdjs['MainGameCode'] = gdjs.MainGameCode;
