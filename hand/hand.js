(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"hand_atlas_1", frames: [[0,0,1080,1080]]},
		{name:"hand_atlas_2", frames: [[0,0,1080,1080]]},
		{name:"hand_atlas_3", frames: [[0,0,1080,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.hand_1 = function() {
	this.initialize(ss["hand_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hand2 = function() {
	this.initialize(ss["hand_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.klucis = function() {
	this.initialize(ss["hand_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hand2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1080,1080), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hand_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1080,1080), null);


(lib.hand_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(405.55,269.3498);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(508,1252,0.2353,0.2353,0,0,0,539.6,539.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[]},2).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(1).to({regX:540,regY:540,scaleX:0.2616,scaleY:0.2616,x:509.2,y:1227.55},0).wait(1).to({scaleX:0.288,scaleY:0.288,x:510.3,y:1203},0).wait(1).to({scaleX:0.3144,scaleY:0.3144,x:511.4,y:1178.4},0).wait(1).to({scaleX:0.3408,scaleY:0.3408,x:512.5,y:1153.9},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,x:513.65,y:1129.35},0).wait(1).to({scaleX:0.3935,scaleY:0.3935,x:514.75,y:1104.85},0).wait(1).to({scaleX:0.4199,scaleY:0.4199,x:515.85,y:1080.25},0).wait(1).to({scaleX:0.4462,scaleY:0.4462,x:516.95,y:1055.7},0).wait(1).to({scaleX:0.4726,scaleY:0.4726,x:518.1,y:1031.2},0).wait(1).to({scaleX:0.499,scaleY:0.499,x:519.2,y:1006.65},0).wait(1).to({scaleX:0.5253,scaleY:0.5253,x:520.35,y:982.15},0).wait(1).to({scaleX:0.5517,scaleY:0.5517,x:521.4,y:957.55},0).wait(1).to({scaleX:0.5781,scaleY:0.5781,x:522.55,y:933},0).wait(1).to({scaleX:0.6045,scaleY:0.6045,x:523.65,y:908.5},0).wait(1).to({scaleX:0.6308,scaleY:0.6308,x:524.8,y:883.95},0).wait(1).to({scaleX:0.6572,scaleY:0.6572,x:525.9,y:859.4},0).wait(1).to({scaleX:0.6836,scaleY:0.6836,x:527,y:834.85},0).wait(1).to({scaleX:0.7099,scaleY:0.7099,x:528.1,y:810.3},0).wait(1).to({scaleX:0.7363,scaleY:0.7363,x:529.25,y:785.8},0).wait(1).to({scaleX:0.7627,scaleY:0.7627,x:530.35,y:761.25},0).wait(1).to({scaleX:0.789,scaleY:0.789,x:531.5,y:736.7},0).wait(1).to({scaleX:0.8154,scaleY:0.8154,x:532.55,y:712.15},0).wait(1).to({scaleX:0.8418,scaleY:0.8418,x:533.7,y:687.6},0).wait(1).to({scaleX:0.8682,scaleY:0.8682,x:534.8,y:663.1},0).wait(1).to({scaleX:0.8945,scaleY:0.8945,x:535.9,y:638.55},0).wait(1).to({scaleX:0.9209,scaleY:0.9209,x:537.05,y:614},0).wait(1).to({scaleX:0.9473,scaleY:0.9473,x:538.1,y:589.45},0).wait(1).to({scaleX:0.9736,scaleY:0.9736,x:539.25,y:564.9},0).wait(1).to({scaleX:1,scaleY:1,x:540.35,y:540.35},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(295.95,1595.2,1,1,0,0,0,540,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.0734,scaleY:1.0734,x:287.95,y:1379.1},0).wait(1).to({scaleX:1.1467,scaleY:1.1467,x:279.95,y:1163.05},0).wait(1).to({scaleX:1.2201,scaleY:1.2201,x:272,y:947},0).wait(1).to({scaleX:1.2934,scaleY:1.2934,x:264,y:730.95},0).wait(1).to({scaleX:1.3668,scaleY:1.3668,x:255.95,y:514.9},0).wait(1).to({x:282.5,y:825.45},0).wait(1).to({x:309,y:1136},0).wait(1).to({x:335.5,y:1446.6},0).wait(1).to({x:362,y:1757.15},0).wait(20).to({_off:true},1).wait(30));

	// Layer_1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(540,540,1,1,0,0,0,540,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.0534,scaleY:1.0534,x:515.15,y:532.35},0).wait(1).to({scaleX:1.1067,scaleY:1.1067,x:490.25,y:524.7},0).wait(1).to({scaleX:1.1601,scaleY:1.1601,x:465.4,y:517.1},0).wait(1).to({scaleX:1.2134,scaleY:1.2134,x:440.55,y:509.4},0).wait(1).to({scaleX:1.2668,scaleY:1.2668,x:415.65,y:501.75},0).wait(1).to({scaleX:1.1773,scaleY:1.1773,x:394.9,y:495.35},0).wait(1).to({scaleX:1.0879,scaleY:1.0879,x:374.2,y:488.95},0).wait(1).to({scaleX:0.9984,scaleY:0.9984,x:353.45,y:482.6},0).wait(1).to({scaleX:0.909,scaleY:0.909,x:332.7,y:476.2},0).wait(1).to({scaleX:0.9136,scaleY:0.9136,rotation:-2.0469,x:267.95,y:459.2},0).wait(1).to({scaleX:0.9181,scaleY:0.9181,rotation:-4.0938,x:203.2,y:442.15},0).wait(1).to({scaleX:0.9227,scaleY:0.9227,rotation:-6.1407,x:138.45,y:425.15},0).wait(1).to({scaleX:0.9272,scaleY:0.9272,rotation:-8.1876,x:73.7,y:408.15},0).wait(1).to({scaleX:0.9318,scaleY:0.9318,rotation:-10.2344,x:8.95,y:391.15},0).wait(1).to({scaleX:0.9363,scaleY:0.9363,rotation:-12.2813,x:-55.8,y:374.15},0).wait(1).to({scaleX:0.9409,scaleY:0.9409,rotation:-14.3282,x:-120.55,y:357.1},0).wait(1).to({scaleX:0.9454,scaleY:0.9454,rotation:-16.3751,x:-185.35,y:340.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-18.422,x:-250.05,y:323.1},0).wait(1).to({scaleX:0.9545,scaleY:0.9545,rotation:-20.4689,x:-314.8,y:306.05},0).wait(1).to({scaleX:0.9591,scaleY:0.9591,rotation:-22.5158,x:-379.6,y:289},0).wait(1).to({scaleX:0.9636,scaleY:0.9636,rotation:-24.5627,x:-444.35,y:272},0).wait(1).to({scaleX:0.9682,scaleY:0.9682,rotation:-26.6096,x:-509.15,y:254.95},0).wait(1).to({scaleX:0.9727,scaleY:0.9727,rotation:-28.6565,x:-573.85,y:237.95},0).wait(1).to({scaleX:0.9772,scaleY:0.9772,rotation:-30.7033,x:-638.6,y:220.95},0).wait(1).to({scaleX:0.9818,scaleY:0.9818,rotation:-32.7502,x:-703.35,y:203.95},0).wait(1).to({scaleX:0.9863,scaleY:0.9863,rotation:-34.7971,x:-768.1,y:186.95},0).wait(1).to({scaleX:0.9909,scaleY:0.9909,rotation:-36.844,x:-832.9,y:169.9},0).wait(1).to({scaleX:0.9954,scaleY:0.9954,rotation:-38.8909,x:-897.6,y:152.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-40.9378,x:-962.4,y:135.95},0).to({_off:true},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1724.1,-625.8,2824.2,3121.1000000000004);


// stage content:
(lib.hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.hand.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.hand.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.hand = new lib.hand_2();
	this.hand.name = "hand";
	this.hand.setTransform(992,540,1,1,0,0,0,540,540);

	this.instance = new lib.klucis();
	this.instance.setTransform(452,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgEAwQgPgDgPgMQgGgEgBgEIgBgMIgDgNQgCgLAGgKQAHgMAMgHQANgHALAEIAAgFQAeAJAJAOQAHAMgBARQgDAbgRAMQgKAGgMAAIgJgBg");
	this.shape.setTransform(906.0475,728.174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.hand}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1168,540,364,1595.1999999999998);
// library properties:
lib.properties = {
	id: '30C2ADA67ED94471B849A1F3B907EC8B',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hand_atlas_1.png", id:"hand_atlas_1"},
		{src:"images/hand_atlas_2.png", id:"hand_atlas_2"},
		{src:"images/hand_atlas_3.png", id:"hand_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['30C2ADA67ED94471B849A1F3B907EC8B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;