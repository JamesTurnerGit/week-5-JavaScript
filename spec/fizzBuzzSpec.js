describe("fizzBuzz", function(){
  it("returns 'Fizz' when passed 3", function(){

    expect(fizzBuzz(3)).toEqual('Fizz');

  });

  it("returns 'Buzz' when passed 5", function(){

    expect(fizzBuzz(5)).toEqual('Buzz');

  });

  it("returns 'FizzBuzz' when passed 15", function(){

    expect(fizzBuzz(15)).toEqual("FizzBuzz");

  });

  it("returns 2 when passed 2", function(){

    expect(fizzBuzz(2)).toEqual(2);

  });

});
