import warnings

def deprecated_function():
    warnings.warn("The function 'deprecated_function' is deprecated and will be removed in future versions.", DeprecationWarning)

def potential_security_issue():
    warnings.warn("Potential security issue: This script is not designed for secure environments.", UserWarning)

def performance_issue():
    warnings.warn("Performance issue: This script may not handle large data efficiently.", RuntimeWarning)

def main():
    print("Running script...")
    deprecated_function()
    potential_security_issue()
    performance_issue()
    print("Script finished.")

if __name__ == "__main__":
    main()
