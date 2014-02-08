describe("Conways Game Of Life", function() {
  describe("applyRules", function() {
    it("kills a cell with 0 neighbors", function() {
      var neighborhood = [0, 0, 0,
                          0, 1, 0,
                          0, 0, 0];
      expect(applyRules(neighborhood)).toEqual(0);
    });

    it("leaves a live cell if there are two living neighbors", function() {
      var neighborhood = [0, 0, 1,
                          0, 1, 0,
                          0, 0, 1];

      expect(applyRules(neighborhood)).toEqual(1);
    });

    it("leaves live cells when there are three living neighbors", function() {
      var neighborhood = [0, 1, 0,
                          0, 1, 1,
                          0, 0, 1];

      expect(applyRules(neighborhood)).toEqual(1);
    });

    it("keeps a dead cell with 2 neighbors dead", function() {
      var neighborhood = [0, 0, 0,
                          0, 0, 1,
                          0, 0, 1];

      expect(applyRules(neighborhood)).toEqual(0);
    });
    it("brings to life a dead cell with 3 neighbors", function() {
      var neighborhood = [0, 0, 1,
                          0, 0, 1,
                          0, 0, 1];

      expect(applyRules(neighborhood)).toEqual(1);
    });
  });

  describe("findNeighborhood", function() {
    it("returns the 9 cells around neighborhood 6", function() {
      var world = [0, 0, 0, 0, 0,
                   0, 1, 0, 0, 1,
                   1, 0, 0, 0, 1,
                   0, 1, 0, 1, 0,
                   0, 1, 1, 0, 0];
      var neighborhood = findNeighborhood(6, world);

      expect(neighborhood).toEqual([0, 0, 0,
                                    0, 1, 0,
                                    1, 0, 0]);
    });

    it("returns cells around neighborhood 5", function() {
      var world = [0, 0, 0, 0, 0,
                   0, 1, 0, 0, 1,
                   1, 0, 0, 0, 1,
                   0, 1, 0, 1, 0,
                   0, 1, 1, 0, 0];
      var neighborhood = findNeighborhood(5, world);
           
      expect(neighborhood).toEqual([0, 0, 0,
                                    0, 0, 1,
                                    0, 1, 0]);
    });
  });
});