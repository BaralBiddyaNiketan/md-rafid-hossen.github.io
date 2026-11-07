gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDFloorObjects1= [];
gdjs.Untitled_32sceneCode.GDFloorObjects2= [];
gdjs.Untitled_32sceneCode.GDGunObjects1= [];
gdjs.Untitled_32sceneCode.GDGunObjects2= [];
gdjs.Untitled_32sceneCode.GDBulletObjects1= [];
gdjs.Untitled_32sceneCode.GDBulletObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDSpawnpointObjects1= [];
gdjs.Untitled_32sceneCode.GDSpawnpointObjects2= [];
gdjs.Untitled_32sceneCode.GDCenterObjects1= [];
gdjs.Untitled_32sceneCode.GDCenterObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSpawnpointObjects1Objects = Hashtable.newFrom({"Spawnpoint": gdjs.Untitled_32sceneCode.GDSpawnpointObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCenterObjects1Objects = Hashtable.newFrom({"Center": gdjs.Untitled_32sceneCode.GDCenterObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Untitled_32sceneCode.GDFloorObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDFloorObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDFloorObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getPointX("GunPoint")),(( gdjs.Untitled_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayerObjects1[0].getPointX("GunPoint")));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].getBehavior("Flippable").flipY(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGunObjects1[i].getBehavior("Flippable").flipY(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.Untitled_32sceneCode.GDGunObjects1);
{}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects, 500, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Spawn");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawnpoint"), gdjs.Untitled_32sceneCode.GDSpawnpointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Enemy Spawn") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSpawnpointObjects1Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSpawnpointObjects1 */
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects, (( gdjs.Untitled_32sceneCode.GDSpawnpointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnpointObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDSpawnpointObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDSpawnpointObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Spawn");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Untitled_32sceneCode.GDCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCenterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {

  // Player 8-direction WASD & Arrow Key controls
  var players = runtimeScene.getObjects("Player");
  for (var pi = 0; pi < players.length; pi++) {
    var p = players[pi];
    var dx = 0;
    var dy = 0;
    var speed = 200 * (runtimeScene.getTimeManager().getElapsedTime() / 1000);
    if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "a") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "A")) dx -= speed;
    if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "d") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "D")) dx += speed;
    if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "w") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "W")) dy -= speed;
    if (gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "s") || gdjs.evtTools.input.isKeyPressed(runtimeScene, "S")) dy += speed;
    if (dx !== 0 || dy !== 0) {
      p.setX(p.getX() + dx);
      p.setY(p.getY() + dy);
      p.getBehavior("Animation").setAnimationName("Run");
    } else {
      p.getBehavior("Animation").setAnimationName("Idle");
    }
  }


  if (gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left")) {
    var guns = runtimeScene.getObjects("Gun");
    for (var gi = 0; gi < guns.length; gi++) {
      var gun = guns[gi];
      if (!gun._lastShot || Date.now() - gun._lastShot > 250) {
        gun._lastShot = Date.now();
        var b = runtimeScene.createObject("Bullet");
        if (b) {
          b.setPosition(gun.getX(), gun.getY());
          b.setAngle(gun.getAngle());
          b.addPolarForce(gun.getAngle(), 600, 1);
        }
      }
    }
  }

runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDFloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDFloorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGunObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnpointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnpointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCenterObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
