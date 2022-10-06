gdjs._26410_21629_21517_22330_26223Code = {};
gdjs._26410_21629_21517_22330_26223Code.GDstandObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDstandObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDstandObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDstandObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects4= [];
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects3= [];
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects4= [];

gdjs._26410_21629_21517_22330_26223Code.conditionTrue_0 = {val:false};
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0 = {val:false};
gdjs._26410_21629_21517_22330_26223Code.condition1IsTrue_0 = {val:false};
gdjs._26410_21629_21517_22330_26223Code.condition2IsTrue_0 = {val:false};
gdjs._26410_21629_21517_22330_26223Code.conditionTrue_1 = {val:false};
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_1 = {val:false};
gdjs._26410_21629_21517_22330_26223Code.condition1IsTrue_1 = {val:false};
gdjs._26410_21629_21517_22330_26223Code.condition2IsTrue_1 = {val:false};


gdjs._26410_21629_21517_22330_26223Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3);


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3);


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3);


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3[i].setAnimationName("Falling");
}
}}

}


{


{
}

}


};gdjs._26410_21629_21517_22330_26223Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2 */

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].setAnimationName("Idle");
}
}}

}


};gdjs._26410_21629_21517_22330_26223Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._26410_21629_21517_22330_26223Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length;i<l;++i) {
    if ( !(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._26410_21629_21517_22330_26223Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1 */

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].flipX(false);
}
}}

}


};gdjs._26410_21629_21517_22330_26223Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].getVariableNumber(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].getVariables().get("Attack")) == 0 ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._26410_21629_21517_22330_26223Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDstandObjects2Objects = Hashtable.newFrom({"stand": gdjs._26410_21629_21517_22330_26223Code.GDstandObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDwalkObjects2Objects = Hashtable.newFrom({"walk": gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDsleepObjects2Objects = Hashtable.newFrom({"sleep": gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDdriveObjects2Objects = Hashtable.newFrom({"drive": gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDjumpObjects2Objects = Hashtable.newFrom({"jump": gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDsitObjects2Objects = Hashtable.newFrom({"sit": gdjs._26410_21629_21517_22330_26223Code.GDsitObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDreadObjects2Objects = Hashtable.newFrom({"read": gdjs._26410_21629_21517_22330_26223Code.GDreadObjects2});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects1Objects = Hashtable.newFrom({"Holly": gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDliftObjects1Objects = Hashtable.newFrom({"lift": gdjs._26410_21629_21517_22330_26223Code.GDliftObjects1});
gdjs._26410_21629_21517_22330_26223Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].getVariableNumber(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].getVariables().get("Attack")) == 1 ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2[i].setAnimationName("Ground smash");
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("stand"), gdjs._26410_21629_21517_22330_26223Code.GDstandObjects2);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDstandObjects2Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDstandObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDstandObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDstandObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("walk"), gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects2);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDwalkObjects2Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("sleep"), gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects2);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDsleepObjects2Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("drive"), gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects2);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDdriveObjects2Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects2);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDjumpObjects2Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("sit"), gdjs._26410_21629_21517_22330_26223Code.GDsitObjects2);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDsitObjects2Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDsitObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDsitObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDsitObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1, gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2);

gdjs.copyArray(runtimeScene.getObjects("read"), gdjs._26410_21629_21517_22330_26223Code.GDreadObjects2);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects2Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDreadObjects2Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDreadObjects2 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDreadObjects2.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDreadObjects2[i].setAnimation(1);
}
}}

}


{

/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("lift"), gdjs._26410_21629_21517_22330_26223Code.GDliftObjects1);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDHollyObjects1Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_46_9526410_9521629_9521517_9522330_9526223Code_46GDliftObjects1Objects, false, runtimeScene, false);
}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDliftObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDliftObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDliftObjects1[i].setAnimation(1);
}
}}

}


};gdjs._26410_21629_21517_22330_26223Code.eventsList5 = function(runtimeScene) {

{


gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
gdjs._26410_21629_21517_22330_26223Code.condition1IsTrue_0.val = false;
{
gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val ) {
{
{gdjs._26410_21629_21517_22330_26223Code.conditionTrue_1 = gdjs._26410_21629_21517_22330_26223Code.condition1IsTrue_0;
gdjs._26410_21629_21517_22330_26223Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8381428);
}
}}
if (gdjs._26410_21629_21517_22330_26223Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].returnVariable(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].getVariables().get("Attack")).setNumber(1);
}
}
{ //Subevents
gdjs._26410_21629_21517_22330_26223Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs._26410_21629_21517_22330_26223Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1);

gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length;i<l;++i) {
    if ( gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].hasAnimationEnded() ) {
        gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val = true;
        gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[k] = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i];
        ++k;
    }
}
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length = k;}if (gdjs._26410_21629_21517_22330_26223Code.condition0IsTrue_0.val) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].returnVariable(gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[i].getVariables().get("Attack")).setNumber(0);
}
}}

}


};gdjs._26410_21629_21517_22330_26223Code.eventsList7 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Holly"), gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length !== 0 ? gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1[0] : null), true, "Main_Layer", 0);
}}

}


};gdjs._26410_21629_21517_22330_26223Code.eventsList8 = function(runtimeScene) {

{


gdjs._26410_21629_21517_22330_26223Code.eventsList3(runtimeScene);
}


{


gdjs._26410_21629_21517_22330_26223Code.eventsList5(runtimeScene);
}


{


gdjs._26410_21629_21517_22330_26223Code.eventsList6(runtimeScene);
}


{


gdjs._26410_21629_21517_22330_26223Code.eventsList7(runtimeScene);
}


};

gdjs._26410_21629_21517_22330_26223Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26410_21629_21517_22330_26223Code.GDstandObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDstandObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDstandObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDstandObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDHollyObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDwalkObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSpriteObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTiledSprite2Objects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsleepObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDjumpObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDdriveObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDliftObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDreadObjects4.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects3.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDsitObjects4.length = 0;

gdjs._26410_21629_21517_22330_26223Code.eventsList8(runtimeScene);
return;

}

gdjs['_26410_21629_21517_22330_26223Code'] = gdjs._26410_21629_21517_22330_26223Code;
