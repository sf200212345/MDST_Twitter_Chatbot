You will need to set up a python virtual environment for this section. Virtual environments are useful to make sure packages used by everyone pulling from your repo is the same version. They can also prevent overwriting global packages, which may be especially helpful if your project uses a different version of a package from your globally installed one.

Use the following to create a virtual environment. Make sure you are inside the "api" folder when doing this.
python3 -m venv env

To activate/deactivate your virtual environment (make sure to always activate before running anything in api!):
source env/bin/activate
deactivate

Prior to installing dependencies, uncomment either tensorflow (includes keras) or torch depending on which library you use. These dependencies are fairly large at ~500 MB, so you only want to install the one you need.
To install dependencies (make sure you're inside the "api" folder and your virtual environment has been activated!):
pip install -r requirements.txt