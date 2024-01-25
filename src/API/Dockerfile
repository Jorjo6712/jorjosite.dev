FROM python:3.8

WORKDIR /app

COPY src/requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . /app

ENV FLASK_APP=api:app

CMD ["gunicorn", "-b", "0.0.0.0:3000", "api:app"]