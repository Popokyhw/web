import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="relative h-screen w-full overflow-x-hidden scroll-smooth bg-white text-gray-900">
      <Header />
      
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=2071"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
          showDownArrow
        />
        
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://images.unsplash.com/photo-1619317554478-c3a64d71f582?auto=format&fit=crop&q=80&w=2071"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
        />
        
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&q=80&w=2071"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
        />
        
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2071"
          leftBtn="Custom Order"
          rightBtn="Existing Inventory"
        />
        
        <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImg="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2071"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
        
        <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="https://images.unsplash.com/photo-1611356524108-920a32e30cd3?auto=format&fit=crop&q=80&w=2071"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
      </main>
    </div>
  );
}

export default App;