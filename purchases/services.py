from django.db import transaction


@transaction.atomic
def create_purchase(client, tickets):
    client.create_purchase(tickets)

    