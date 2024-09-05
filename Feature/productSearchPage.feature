Feature: Product search
Scenario: Verify the product search page opens
   Given let open the url '<URL>'
   And tab on seacrTextBox
   Then provide a '<Product>' for search
   And click on search icon
   Then validate the product is visble or not

   
