gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDfloorObjects1= [];
gdjs.Untitled_32sceneCode.GDfloorObjects2= [];
gdjs.Untitled_32sceneCode.GDfloorObjects3= [];
gdjs.Untitled_32sceneCode.GDfloorObjects4= [];
gdjs.Untitled_32sceneCode.GDplayrObjects1= [];
gdjs.Untitled_32sceneCode.GDplayrObjects2= [];
gdjs.Untitled_32sceneCode.GDplayrObjects3= [];
gdjs.Untitled_32sceneCode.GDplayrObjects4= [];
gdjs.Untitled_32sceneCode.GDBullteObjects1= [];
gdjs.Untitled_32sceneCode.GDBullteObjects2= [];
gdjs.Untitled_32sceneCode.GDBullteObjects3= [];
gdjs.Untitled_32sceneCode.GDBullteObjects4= [];
gdjs.Untitled_32sceneCode.GDAnymeObjects1= [];
gdjs.Untitled_32sceneCode.GDAnymeObjects2= [];
gdjs.Untitled_32sceneCode.GDAnymeObjects3= [];
gdjs.Untitled_32sceneCode.GDAnymeObjects4= [];
gdjs.Untitled_32sceneCode.GDCenterObjects1= [];
gdjs.Untitled_32sceneCode.GDCenterObjects2= [];
gdjs.Untitled_32sceneCode.GDCenterObjects3= [];
gdjs.Untitled_32sceneCode.GDCenterObjects4= [];
gdjs.Untitled_32sceneCode.GDSponpointtObjects1= [];
gdjs.Untitled_32sceneCode.GDSponpointtObjects2= [];
gdjs.Untitled_32sceneCode.GDSponpointtObjects3= [];
gdjs.Untitled_32sceneCode.GDSponpointtObjects4= [];
gdjs.Untitled_32sceneCode.GDWallobjectObjects1= [];
gdjs.Untitled_32sceneCode.GDWallobjectObjects2= [];
gdjs.Untitled_32sceneCode.GDWallobjectObjects3= [];
gdjs.Untitled_32sceneCode.GDWallobjectObjects4= [];
gdjs.Untitled_32sceneCode.GDTimerObjects1= [];
gdjs.Untitled_32sceneCode.GDTimerObjects2= [];
gdjs.Untitled_32sceneCode.GDTimerObjects3= [];
gdjs.Untitled_32sceneCode.GDTimerObjects4= [];
gdjs.Untitled_32sceneCode.GDGanObjects1= [];
gdjs.Untitled_32sceneCode.GDGanObjects2= [];
gdjs.Untitled_32sceneCode.GDGanObjects3= [];
gdjs.Untitled_32sceneCode.GDGanObjects4= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Untitled_32sceneCode.GDTimerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wallobject"), gdjs.Untitled_32sceneCode.GDWallobjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.Untitled_32sceneCode.GDfloorObjects2);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDfloorObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDfloorObjects2[0] : null), true, "", 0);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWallobjectObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWallobjectObjects2[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ClockTimer");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTimerObjects2[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - 100,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 15);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAnymeObjects2Objects = Hashtable.newFrom({"Anyme": gdjs.Untitled_32sceneCode.GDAnymeObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCenterObjects2Objects = Hashtable.newFrom({"Center": gdjs.Untitled_32sceneCode.GDCenterObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSponpointtObjects2Objects = Hashtable.newFrom({"Sponpointt": gdjs.Untitled_32sceneCode.GDSponpointtObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAnymeObjects2Objects = Hashtable.newFrom({"Anyme": gdjs.Untitled_32sceneCode.GDAnymeObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullteObjects2Objects = Hashtable.newFrom({"Bullte": gdjs.Untitled_32sceneCode.GDBullteObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAnymeObjects2Objects = Hashtable.newFrom({"Anyme": gdjs.Untitled_32sceneCode.GDAnymeObjects2});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Anemy spond");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Untitled_32sceneCode.GDCenterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAnymeObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCenterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sponpointt"), gdjs.Untitled_32sceneCode.GDSponpointtObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Anemy spond") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSponpointtObjects2Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSponpointtObjects2 */
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAnymeObjects2Objects, (( gdjs.Untitled_32sceneCode.GDSponpointtObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSponpointtObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSponpointtObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSponpointtObjects2[0].getPointY("")), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Anemy spond");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Animation").getAnimationName() == "Hart") ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDAnymeObjects2[k] = gdjs.Untitled_32sceneCode.GDAnymeObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAnymeObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Untitled_32sceneCode.GDCenterObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].addForceTowardObject((gdjs.Untitled_32sceneCode.GDCenterObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDCenterObjects2[0] : null), 10, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Untitled_32sceneCode.GDCenterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getX() >= (( gdjs.Untitled_32sceneCode.GDCenterObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCenterObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDAnymeObjects2[k] = gdjs.Untitled_32sceneCode.GDAnymeObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAnymeObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Untitled_32sceneCode.GDCenterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getX() <= (( gdjs.Untitled_32sceneCode.GDCenterObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCenterObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDAnymeObjects2[k] = gdjs.Untitled_32sceneCode.GDAnymeObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAnymeObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bullte"), gdjs.Untitled_32sceneCode.GDBullteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullteObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAnymeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAnymeObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDBullteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBullteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBullteObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Animation").setAnimationName("Hart");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].setAnimationFrame(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Animation").getAnimationName() == "Hart" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDAnymeObjects2[k] = gdjs.Untitled_32sceneCode.GDAnymeObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDAnymeObjects2[k] = gdjs.Untitled_32sceneCode.GDAnymeObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAnymeObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getBehavior("Animation").setAnimationName("Walking");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDAnymeObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDAnymeObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDAnymeObjects1[k] = gdjs.Untitled_32sceneCode.GDAnymeObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDAnymeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDAnymeObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullteObjects3Objects = Hashtable.newFrom({"Bullte": gdjs.Untitled_32sceneCode.GDBullteObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayrObjects2Objects = Hashtable.newFrom({"playr": gdjs.Untitled_32sceneCode.GDplayrObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullteObjects2Objects = Hashtable.newFrom({"Bullte": gdjs.Untitled_32sceneCode.GDBullteObjects2});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gan"), gdjs.Untitled_32sceneCode.GDGanObjects3);
gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGanObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGanObjects3[i].setPosition((( gdjs.Untitled_32sceneCode.GDplayrObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayrObjects3[0].getPointX("Ganpoint")),(( gdjs.Untitled_32sceneCode.GDplayrObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayrObjects3[0].getPointY("Ganpoint")));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGanObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGanObjects3[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gan"), gdjs.Untitled_32sceneCode.GDGanObjects3);
gdjs.Untitled_32sceneCode.GDBullteObjects3.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGanObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGanObjects3[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDGanObjects3[i].getPointX("Bulletpoint")), (gdjs.Untitled_32sceneCode.GDGanObjects3[i].getPointY("Bulletpoint")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullteObjects3Objects, (gdjs.Untitled_32sceneCode.GDGanObjects3[i].getAngle()), 200, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gan"), gdjs.Untitled_32sceneCode.GDGanObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGanObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGanObjects3[i].getBehavior("FireBullet").HasJustFired(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGanObjects3[k] = gdjs.Untitled_32sceneCode.GDGanObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGanObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "6d326aaa7459782a48b425e2ff31e4c19473379e431c82cb3c8b3d50fb9540eb_Gun 4.aac", false, 50, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullte"), gdjs.Untitled_32sceneCode.GDBullteObjects2);
gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayrObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullteObjects2Objects, 500, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBullteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBullteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBullteObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallobjectObjects3Objects = Hashtable.newFrom({"Wallobject": gdjs.Untitled_32sceneCode.GDWallobjectObjects3});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Wallobject"), gdjs.Untitled_32sceneCode.GDWallobjectObjects3);
gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayrObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayrObjects3[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDWallobjectObjects3Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayrObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayrObjects3[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayrObjects3[k] = gdjs.Untitled_32sceneCode.GDplayrObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayrObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayrObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayrObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayrObjects3[i].getBehavior("Animation").setAnimationName("run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayrObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayrObjects3[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayrObjects3[k] = gdjs.Untitled_32sceneCode.GDplayrObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayrObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gan"), gdjs.Untitled_32sceneCode.GDGanObjects3);
/* Reuse gdjs.Untitled_32sceneCode.GDplayrObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayrObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayrObjects3[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGanObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGanObjects3[i].getBehavior("Flippable").flipY(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayrObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayrObjects2[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayrObjects2[k] = gdjs.Untitled_32sceneCode.GDplayrObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayrObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gan"), gdjs.Untitled_32sceneCode.GDGanObjects2);
/* Reuse gdjs.Untitled_32sceneCode.GDplayrObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayrObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayrObjects2[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGanObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGanObjects2[i].getBehavior("Flippable").flipY(false);
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Anyme"), gdjs.Untitled_32sceneCode.GDAnymeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bullte"), gdjs.Untitled_32sceneCode.GDBullteObjects2);
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Untitled_32sceneCode.GDCenterObjects2);
gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayrObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayrObjects2[i].setZOrder((gdjs.Untitled_32sceneCode.GDplayrObjects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBullteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBullteObjects2[i].setZOrder((gdjs.Untitled_32sceneCode.GDBullteObjects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnymeObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].setZOrder((gdjs.Untitled_32sceneCode.GDAnymeObjects2[i].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCenterObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCenterObjects2[i].setZOrder((gdjs.Untitled_32sceneCode.GDCenterObjects2[i].getPointY("")));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gan"), gdjs.Untitled_32sceneCode.GDGanObjects1);
gdjs.copyArray(runtimeScene.getObjects("playr"), gdjs.Untitled_32sceneCode.GDplayrObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGanObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGanObjects1[i].setZOrder((( gdjs.Untitled_32sceneCode.GDplayrObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayrObjects1[0].getZOrder()));
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
gdjs.Untitled_32sceneCode.GDfloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDfloorObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDplayrObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBullteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAnymeObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSponpointtObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWallobjectObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGanObjects4.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
