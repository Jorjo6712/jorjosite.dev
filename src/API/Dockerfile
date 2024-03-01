FROM python:3.13-rc-slim-bookworm

WORKDIR /app

COPY src/requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . /app

ENV FLASK_APP=api:app

CMD ["gunicorn", "-b", "0.0.0.0:56041", "api:app"]