"""
Centralised logging configuration for Dioscuri.

This module provides a unified logger instance with consistent formatting
across all backend modules, including timestamps for precise timing analysis.
"""

import logging
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent

# Log format constants
LOG_FORMAT = "[%(asctime)s] %(name)s | %(levelname)s | %(message)s [ %(funcName)s - %(relativepath)s:%(lineno)d ]"
DATE_FORMAT = "%Y-%m-%d %H:%M:%S"


class RelativePathFormatter(logging.Formatter):
    """Custom formatter that adds relative path information to log records."""

    def format(self, record: logging.LogRecord) -> str:
        # Add relativepath attribute to record before formatting
        try:
            record.relativepath = str(Path(record.pathname).relative_to(BASE_DIR))
        except ValueError:
            record.relativepath = record.pathname

        return super().format(record)


# Clear any existing handlers to avoid duplicates on reload
logging.root.handlers.clear()

# Create handler with our custom formatter that populates relativepath
_handler = logging.StreamHandler()
_handler.setFormatter(RelativePathFormatter(LOG_FORMAT, DATE_FORMAT))

# Configure root logger with custom handler
logging.root.setLevel(logging.DEBUG)
logging.root.addHandler(_handler)

# Create the main application logger with explicit type for mypy
logger: logging.Logger = logging.getLogger("Cassiopeia Porfolio")

# Reduce noise from uvicorn's error logger
logging.getLogger("uvicorn.error").setLevel(logging.ERROR)
