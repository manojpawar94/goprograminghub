---
title: "Setting Up Python Environment"
excerpt: "Step-by-step guide to install Python and set up your development environment."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Setting Up Python Environment

## Installation Methods
1. **Official Python Website**
   - Download from [python.org](https://www.python.org/downloads/)
   - Follow installation wizard

2. **Package Managers**
   - macOS: `brew install python`
   - Linux: `sudo apt-get install python3`

## Verifying Installation
```python
python --version
# or
python3 --version
```

## IDE Options
- VS Code
- PyCharm
- Jupyter Notebook

## Virtual Environments
```python
# Create virtual environment
python -m venv myenv

# Activate (Windows)
myenv\Scripts\activate

# Activate (macOS/Linux)
source myenv/bin/activate
```