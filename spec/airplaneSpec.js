describe ("airplane", function(){
  var plane
  beforeEach(function() {
    plane = new Airplane();
  });

  it("know if it's flying",function(){
    expect(plane.isFlying()).toBe(true);
  });

  it("can land",function(){
    expect(plane.land()).toBe(undefined);
  });

  it("isn't flying after landing",function(){
    plane.land()
    expect(plane.isFlying()).toBe(false);
  });

  it("can take off if landed",function(){
    plane.land()
    plane.takeOff()
    expect(plane.isFlying()).toBe(true);
  });

  it("can't take off in air",function(){
    plane.takeOff()

    expect(plane.isFlying()).toBe(true);
  });
  it("raise error if told to land twice",function(){
    plane.land()
    expect(function(){plane.land()}).toThrow("already landed")
  });
});
