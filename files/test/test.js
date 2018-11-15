describe('', function () {
    it("Make sure that GuineaPigsContainer.js is in a folder named containers, and that that folder is neighbors with the components folder.", function () {
      
      var correctPath = true;
  
          try {
            require('../containers/GuineaPigsContainer.js');
          } catch (e) {
            correctPath = false;
          }
      expect(correctPath).to.equal(true);
    });
  });