gdjs.MenuCode = {};
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDLargePlayButtonObjects1= [];
gdjs.MenuCode.GDLargePlayButtonObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLargePlayButtonObjects1Objects = Hashtable.newFrom({"LargePlayButton": gdjs.MenuCode.GDLargePlayButtonObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.MenuCode.GDLargePlayButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLargePlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8173676);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "assets\\mixkit-unlock-game-notification-253.wav", false, 80, 1);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.MenuCode.GDLargePlayButtonObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
