// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="p-4 bg-gradient-primary rounded-2xl mb-6 inline-block">
          <div className="h-16 w-16 bg-white rounded-xl flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-primary">CC</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">CloudCycle</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Please visit <strong>/login</strong> to access the application
        </p>
        <div className="p-4 bg-card rounded-xl border border-border text-sm text-muted-foreground">
          <p>This page should not be accessible in the final app as users will be redirected to login.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
